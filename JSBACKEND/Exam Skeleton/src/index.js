import express from 'express';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';
import 'dotenv/config'

import routes from './routes.js';
import cookieParser from 'cookie-parser';
import { authMiddleware } from './middlewares/authMiddleware.js';
import { errorMiddleware } from './middlewares/errorMiddleware.js';

const app = express();

// Setup DB
try {
    await mongoose.connect('mongodb://localhost:27017', {
        dbName: 'friendly-world',
    });

    console.log('DB connected successfully!')
} catch (err) {
    console.error('Cannot connect to DB!', err.message);
}

// Config hbs
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
}));
app.set('view engine', 'hbs');
app.set('views', 'src/views');

// Add static middleware
app.use(express.static('src/public'));

// Add cookie-parser
app.use(cookieParser());

// Add body parser
app.use(express.urlencoded({ extended: false }));

// Add json parser
app.use(express.json());

// Use auth middleware
app.use(authMiddleware);

// Add routes
app.use(routes);

// Add global error handling
app.use(errorMiddleware);

app.listen(process.env.PORT, () => console.log(`Server is listening on http://localhost:${process.env.PORT}`));