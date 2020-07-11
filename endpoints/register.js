let passwordHash = require('password-hash');
let { argv } = require('yargs');
let { dbUsername, dbPassword } = argv;
const mysql = require('mysql');

const endpoint = async function (request, response) {
    console.log(request.body);
    let { username, password, repassword:extrapass } = request.body;
    console.log(username, password, extrapass);
    if (password !== extrapass)
        return response.send(JSON.stringify({
            success: false,
            data: "Password mismatch"
        }))
    let connection = mysql.createConnection({
        host: "localhost",
        user: dbUsername,
        password: dbPassword,
        database: "sql_database",
    });
    connection.connect(e => {
        if (e) {
            return response.send(e);
        }
        connection.query("SELECT id as username FROM user_credentials", (err, res, fields) => {
            if(err){
                return response.send(err);
            }
            let username_list = res.map(e => e.username);
            if (username_list.includes(username))
                return response.send(JSON.stringify({
                    success: false,
                    data: "Username exists"
                }))

            let hashedPass = passwordHash.generate(password, { algorithm: 'sha256', iterations: 5, saltLength: 32 });
            connection.query(`INSERT INTO user_credentials (id, password) VALUES ("${username}","${hashedPass}")`, (err, res, fields)=>{
                if(err){
                    return response.send(err);
                }
                return response.send(JSON.stringify({
                    success: true,
                    data: null
                }))
            })

        });
    });
}

module.exports = endpoint;