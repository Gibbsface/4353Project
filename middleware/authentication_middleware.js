const jwt = require('jsonwebtoken');
const { request, response } = require('express');
/**
 * 
 * @param {request} req 
 * @param {response} res 
 * @param {Function} next 
 */
const middleware = function (req, res, next) {
    console.log(req.headers);
    console.log(req.path);
    if (!req.path.startsWith("/api") || req.path == '/api/login' || req.path == '/api/register') {
        console.log("nexting to login/register/non-api endpoint")
        next();
        return;
    }
    if (!req.cookies.token) {
        // no token cookie - invalid
        console.log('no token');
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
        console.log(valid);
        if (valid && valid.data) {
            // token is valid, can move on to actual request
            req.username = valid.data.username; 
            next()
        }else{
            throw new Error();
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