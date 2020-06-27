const jwt = require('jsonwebtoken');
const { request, response } = require('express');
/**
 * 
 * @param {request} req 
 * @param {response} res 
 * @param {Function} next 
 */
const middleware = function (req, res, next) {
    if (req.path == '/login' || req.path == '/register') {
        next();
        return;
    }
    if (!req.cookies.token) {
        // no token cookie - invalid
        res.status(401);
        res.send(JSON.stringify({
            success: false,
            data: 'No token'
        }));
        return;
    }
    // need to check if token cookie is valid
    try {
        let valid = jwt.verify(req.cookies.token, "secret", { ignoreExpiration: true });
        if (valid) {
            // token is valid, can move on to actual request
            next()
        }
    } catch (e) {
        // catch token invalid error 
        res.status(401);
        res.send(JSON.stringify({
            success: false,
            data: 'Invalid token'
        }));
    }
}

module.exports = middleware;