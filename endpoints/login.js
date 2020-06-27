const jwt = require('jsonwebtoken');
const passwordHash = require('password-hash');

const hardcode_creds = {
    username: "test",
    hashPass: passwordHash.generate("test", {
        algorithm: "sha256",
        iterations: 5,
        saltLength: 32
    }),
    key: "secret"
}

const endpoint = function (request, response) {
    let { username, password } = request.body;
    if (request.body.username == hardcode_creds.username && passwordHash.verify(password, hardcode_creds.hashPass)) {
        let token = jwt.sign({data: username}, "secret", { expiresIn: 60 * 60 * 24 })
        response.status(200);
        response.cookie('token', token, {
            maxAge: 1000*60*60*24
        })
        response.send(JSON.stringify({
            success: true,
            data: {
                token
            }
        }))
    } else {
        response.status(400);
        response.send(JSON.stringify({
            success: false,
            data: {
            }
        }))
    }
}

module.exports = endpoint;