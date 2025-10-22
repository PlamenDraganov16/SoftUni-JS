import { Router } from "express";
import { userService } from "../services/index.js";
import { isAuth, isGuest } from "../middlewares/authMiddleware.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const userController = Router();

userController.get('/register', isGuest, (req, res) => {
    res.render('users/register', { title: 'Register page' });
});

userController.post('/register', isGuest, async (req, res) => {
    const { email, password, repeatPassword } = req.body;

    try {
        const token = await userService.register(email, password, repeatPassword);
        res.cookie('auth', token);
        res.redirect('/');
    } catch (err) {
        res.status(400).render('users/register', {
            error: getErrorMessage(err),
            user: { email }
        });
    }
});

userController.get('/login', isGuest, (req, res) => {
    res.render('users/login', { title: 'Login page' });
});

userController.post('/login', isGuest, async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await userService.login(email, password);

        res.cookie('auth', token);
        res.redirect('/');
    } catch (err) {
        res.status(404).render('users/register', {
            error: getErrorMessage(err),
            user: { email }
        });
    }
});

userController.get('/logout', isAuth, (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
});


export default userController;