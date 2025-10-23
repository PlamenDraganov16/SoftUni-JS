import jwt from 'jsonwebtoken';

export default function authMiddleware(req, res, next) {
    const token = req.header('X-Authorization');

    if(!token) {
        return next();
    }

    try {
        const decoded = jwt.verify('token', 'ESIYBFW47F324FWEF');

        req.user = decoded;
    } catch (err) {
        res.status(401).end();
    }
}