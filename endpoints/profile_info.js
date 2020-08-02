let connection = require("../database");

const endpoint = function (request, response) {
  connection.query(
    `SELECT * FROM client_information WHERE id = '${request.username}' LIMIT 1`,
    function (error, rows, fields) {
      if (!!error) {
        console.log("Error in query for Profile_info...", request.username);
      } else {
        response.contentType("application/json");
        response.json(rows);
      }
    }
  );
};

module.exports = endpoint;
