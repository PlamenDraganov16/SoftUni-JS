import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();

// Middleware
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Works.');
});

// HTTP Module set cookie method
app.get('/set-cookie', (req, res) => {
    
    res.writeHead(200, {
        'set-cookie': 'name=Pesho',
    });

    res.end();
});

// Express set cookie method
app.get('/set-cookie2', (req, res) => {

    res.header('set-cookie', 'age=20');
    res.end();
});

// Express easiest way RECOMMENDED
app.get('/set-cookie3', (req, res) => {

    res.cookie('width', 190);
    res.cookie('height', 85);

    res.end();
});

// Get cookie Express way
app.get('/get-cookie', (req, res) => {
    // Read request cookie header
    const cookie = req.header('cookie');

    res.send(cookie);
});

// Get cookies Cookie-parser way RECOMMENDED
app.get('/get-cookie2', (req, res) => {

    const cookies = req.cookies;
    // res.send(cookies['name']); Taking specific cookie
    res.send(cookies);

    res.end;
});

app.listen(5000, () => console.log('Server is listening on http://localhost:5000'));
