import express from 'express'
import mongoose from 'mongoose';

import routes from './routes.js';
import authMiddleware from './middlewares/authMiddleware.js';

const app = express();

await mongoose.connect('mongodb://localhost:27017', {
    dbName: 'posts-sept-2025',
});

//JSON Parser middleware
app.use(express.json());

app.use(authMiddleware);

app.use(routes);

app.listen(3000, () => {console.log('App is listening on http://localhost:3000')});