import express from 'express';
import handlebars from 'express-handlebars';
import validator from 'validator';
import mongoose from 'mongoose';
import User from './models/User.js';


const app = express();

app.use(express.urlencoded({ extended: false }));

const url = 'mongodb://localhost:27017';

try {
    await mongoose.connect(url, {
        dbName: 'errorhandleling',
    });
    console.log('MongoDB connected')
} catch (err) {
    console.log(err.message)
}

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', { layout: false });
});

app.get('/register', (req, res) => {
    res.render('register', { layout: false });
});

app.post('/register', async (req, res) => {
    const formData = req.body;

    // Validate email using validator library
    // const isEmailValid = validator.isEmail(formData.email);

    // if(!isEmailValid) res.status(400).send("Email is invalid!");

    // Sanitize email
    // const user = {
    //     ...formData,
    //     email: formData.email.trim().toLowerCase(),
    // };

    // 1. Return to register page
    // 2. Kepp entered data
    // 3. Show appropriate message

    try {
        const createdUser = await User.create(formData);
        res.redirect('/');

    } catch (err) {
        // get the first error message
        const firstErrorMessage = Object.values(err.errors).at(0).message;

        res.status(400).render('register', { user: formData, layout: false, error: firstErrorMessage });

    }
});


app.listen(5000, () => { console.log("Server is listening on http://localhost:5000") });