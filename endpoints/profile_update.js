let { argv } = require("yargs");
let { dbUsername, dbPassword } = argv;
let connection = require("../database");

const endpoint = function(request, response){
  connection.query(
    `UPDATE client_information SET full_name = '${request.body.fullName}' WHERE id = '${request.username}'`,
    function (error, rows, fields) { !!error ? console.log("Error in Query") : console.log("Successful Query")});

  connection.query(
    `UPDATE client_information SET address_1 = '${request.body.addr1}' WHERE id = '${request.username}'`,
    function (error, rows, fields) { !!error ? console.log("Error in Query") : console.log("Successful Query")});

  connection.query(
    `UPDATE client_information SET address_2 = '${request.body.addr2}' WHERE id = '${request.username}'`,
    function (error, rows, fields) { !!error ? console.log("Error in Query") : console.log("Successful Query")});

  connection.query(
    `UPDATE client_information SET city = '${request.body.city}' WHERE id = '${request.username}'`,
    function (error, rows, fields) { !!error ? console.log("Error in Query") : console.log("Successful Query")});

  connection.query(
    `UPDATE client_information SET state = '${request.body.state}' WHERE id = '${request.username}'`,
    function (error, rows, fields) { !!error ? console.log("Error in Query") : console.log("Successful Query")});

  connection.query(
    `UPDATE client_information SET zipcode = ${request.body.zip} WHERE id = '${request.username}'`,
    function (error, rows, fields) { !!error ? console.log("Error in Query") : console.log("Successful Query")});
}

module.exports = endpoint;