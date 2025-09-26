export function loggerMiddleware(req, res, next) {
    console.log(`HTTP REQUEST: ${req.method} - ${req.url}`)

    next();
}

export function userLoginLoggerMiddleware(req, res, next) {

    console.log('This user has been logged!');
    next();
}