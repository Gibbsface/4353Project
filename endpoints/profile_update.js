let { argv } = require("yargs");
let { dbUsername, dbPassword } = argv;
let connection = require("../database");

const endpoint = function(request, response){

  connection.query(
    `REPLACE INTO client_information (id, full_name, address_1, address_2, city, state, zipcode)
    VALUES ('${request.username}', '${request.body.fullName}', '${request.body.addr1}', '${request.body.addr2}', 
    '${request.body.city}', '${request.body.state}', ${request.body.zip})`,
    (error, n)=>{ !!error ? console.log("Query Error", error) : console.log("Successful Update(s)") });
}

module.exports = endpoint;