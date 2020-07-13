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
            console.log("Successful Query");
            const profile = {
              fullName: rows[0].full_name,
              addr1: rows[0].address_1,
              addr2: rows[0].address_2,
              city: rows[0].city,
              state: rows[0].state,
              zip: rows[0].zipcode
          };
            response.contentType("application/json");
            response.json(profile);
          }
        }
      );
}

module.exports = endpoint;