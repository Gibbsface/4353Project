let { argv } = require("yargs");
let { dbUsername, dbPassword } = argv;
let connection = require("../database");

const endpoint = function(request, response){
    connection.query(
        `SELECT * FROM client_information WHERE id = '${request.username}'`,
        function (error, rows, fields) {
          if (!!error) {
            console.log("Error in Query");
          } else {
            console.log("Successful Query", rows);
            response.contentType("application/json");
            response.json(rows);
          }
        }
      );
}

module.exports = endpoint;