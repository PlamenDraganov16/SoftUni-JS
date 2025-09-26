import path from 'node:path'
import express from 'express';
import handlebars from 'express-handlebars';

import userRouter from './userRouter.js'
import { loggerMiddleware, userLoginLoggerMiddleware } from './middlewares/loggerMiddleware.js';

const app = express();

// Add view engine to express
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));

// Use specific view engine
app.set('view engine', 'hbs');

// Use static middleware for serving public files
app.use(express.static('public'));
app.use('/login', loggerMiddleware);

app.get('/', (req, res) => {

    res.send('Hello, World!\n');
});

app.get('/home', (req, res) => {
    res.render('home', {title: 'My Home Page', userText: 'This is <script>alert("You are hacked!");</script>'});
});

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/list', (req, res) => {
    const users = [
        {name: 'Pesho',age: 18},
        {name: 'Gosho', age: 20},
        {name: 'Stamat', age: 48},
    ];

    const isAdmin = true;

    res.render('list', { users, isAdmin })
})

app.get('/login', (req, res) => {
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/style.css" />
    <title>Login</title>
</head>
<body>
    <form action="/login" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
        <br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
        <br>
        <button type="submit">Login</button>
</body>
</html>`);
});

app.post('/login', userLoginLoggerMiddleware, (req, res) => {
    res.send('Login form submitted!\n');
});

app.get('/cats/:id/details', (req, res) => {
    const catId = req.params.id;
    res.send(`Cat ID: ${catId}\n`);
});

// Send JSON response

app.get('/data', (req, res) => {

    res.json({
        name: 'Fluffy',
        age: 3,
    });
});

// Dwonloadable file inline

app.get('/send-file', (req, res) => {
    res.sendFile(path.resolve('./cat.jpg'));
});

// Download on client-browser attachment

app.get('/send-file-download', (req, res) => {

    res.attachment('cute-cat.jpg');
    res.sendFile(path.resolve('./cat.jpg'));
});

// Download file attachment shortcut

app.get('/send-attachment', (req, res) => {
    res.download('./cat.jpg', 'cute-cat.jpg');
})

app.get('/redirect', (req, res) => {
    res.redirect('/redirected');

});

app.get('/redirected', (req, res) => {
    res.send('This page is redirected.')
})


// Using modular router

app.use('/user', userRouter);

// Handle 404 errors

app.use((req, res) => {
  res.status(404).send('Page not found');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});