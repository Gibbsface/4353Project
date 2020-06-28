let passwordHash = require('password-hash');

const endpoint = function(request, response){
    let {username, password, extrapass} = request.body;
    if(password!==extrapass){
        return response.send(JSON.stringify({
            success: false,
            data: "Password re-entry incorrect"
        }))
    }else{
        let hashedPass = passwordHash.generate(password,{algorithm:'sha256',iterations:5,saltLength:32});
        //
        // insert user object into db here
        //
        return response.send(JSON.stringify({
            success: true,
            data: {}
        }))
    }
}

module.exports = endpoint;