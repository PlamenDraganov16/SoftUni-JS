import { Router } from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from "../models/User.js";

const userController = Router();

userController.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
        res.status(401).json({ message: 'Invalid username or password!' });
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        res.status(401).json({ message: 'Invalid username or password!' });

    }

    const token = jwt.sign({
        id: user.id,
        username: user.username,
    }, 'ESIYBFW47F324FWEF', {expiresIn: '2h'});

    res.status(200).json({
        accessToken: token,
    });
});

userController.post('/register', async (req, res) => {
    const userData = req.body;

    await User.create(userData);

    res.status(204).end();
});

export default userController;