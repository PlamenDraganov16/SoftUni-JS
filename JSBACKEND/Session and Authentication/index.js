import express from 'express';
import cookieParser from 'cookie-parser';
import expressSession from 'express-session';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const users = [];
const JWT_SECRET = 'MYSECRETPASSWORD';

const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressSession({
    secret: '1234567890',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

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

// Set session using express-session library
app.get('/set-session', (req, res) => {
    req.session.name = 'Gosho';
    req.session.age = 20;

    res.send('Session is created');
})

app.get('/get-session', (req, res) => {
    res.send(req.session.name);
})

// Register 

app.get('/register', (req, res) => {
    res.send(`
        <form method="post">
            <div>
                <label for="username">Username</label>
                <input type="text" id="username" name="username" />
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" id="password" name="password" />
            </div>
            <div>
                <input type="submit" value="Register">
            </div>
        </form>
    `);
});

app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    // generate salt
    const salt = await bcrypt.genSalt(10);

    // Hash password
    const hash = await bcrypt.hash(password, salt);

    const user = {
        id: users.length,
        username,
        password: hash
    };

    users.push(user);

    res.redirect('/login');
});

// Login

app.get('/login', (req, res) => {

    res.send(`
        <form method="post">
            <div>
                <label for="username">Username</label>
                <input type="text" id="username" name="username" />
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" id="password" name="password" />
            </div>
            <div>
                <input type="submit" value="Login">
            </div>
        </form>
    `);
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // Take user
    const user = users.find(u => u.username === username);

    if (!user) return res.send('No such user!');

    // Compare passwords

    const isPassValid = await bcrypt.compare(password, user.password);

    if (!isPassValid) return res.send('Invalid password!');

    // Issue JWT Token
    const payload = {
        id: user.id,
        username: user.username,
        admin: false,
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '2h' });

    // Attach token to cookie
    res.cookie('auth', token);

    console.log(token);

    // res.send(`Welcome ${username}`);
    res.redirect('/profile');
});

app.get('/profile', (req, res) => {
    const token = req.cookies['auth'];

    // Validate token
    try {
        const decodedToken = jwt.verify(token, JWT_SECRET);

        res.send(`Welcome ${decodedToken.username}`);

    } catch (err) {
        res.status(401).send('Unauthorized!');
    }
})

app.listen(5000, () => console.log('Server is listening on http://localhost:5000'));
