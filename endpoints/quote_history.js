let { argv } = require("yargs");
let { dbUsername, dbPassword } = argv;
let connection = require("../database");

const endpoint = function (request, response) {
  console.log(request.username);
  connection.query(
    `SELECT * FROM fuel_quote WHERE id = '${request.username}'`,
    function (error, rows, fields) {
      if (!!error) {
        console.log("Error in Query");
      } else {
        console.log("Successful Query");
        response.contentType("application/json");
        response.json(rows);
      }
    }
  );
};

module.exports = endpoint;
