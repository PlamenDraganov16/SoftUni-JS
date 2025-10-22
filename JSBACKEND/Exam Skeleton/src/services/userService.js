import User from "../models/User.js";
import bcrypt from 'bcrypt';
import { generateAuthToken } from "../utils/tokenUtils.js";

export async function register(email, password, repeatPassword) {
    const user = await User.findOne({ email });

    if (user) {
        throw new Error('Email already exists');
    }

    if (password !== repeatPassword) {
        throw new Error("Passwords don't match!")
    }

    const createdUser = await User.create({ email, password });

    const token = generateAuthToken(createdUser);

    return token;
}

export async function login(email, password) {
    const user = await User.findOne({ email });

    if (!user) throw new Error('Invalid Email or Passowrd!');

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) throw new Error('Invalid Email or Passowrd!');

    const token = generateAuthToken(user);

    return token;
}