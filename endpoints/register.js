let passwordHash = require('password-hash');
const username_list = ['test'];

const endpoint = function (request, response) {
    let { username, password, extrapass } = request.body;
    if (password !== extrapass)
        return response.send(JSON.stringify({
            success: false,
            data: "Password mismatch"
        }))
    if (username_list.includes(username))
        return response.send(JSON.stringify({
            success: false,
            data: "Username exists"
        }))
    let hashedPass = passwordHash.generate(password, { algorithm: 'sha256', iterations: 5, saltLength: 32 });
    //
    // insert user object into db here
    //
    return response.send(JSON.stringify({
        success: true,
        data: null
    }))
}

module.exports = endpoint;