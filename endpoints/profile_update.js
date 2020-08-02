let connection = require("../database");

const endpoint = function (request, response) {
  const changes = request.body;
  if(changes.length == 0)
    return;

  for(c of changes){
    connection.query(
      `UPDATE client_information SET ${c.field} = "${c.value}"`,
      (e) => {e ? console.log(e) : e});
  }

  response.contentType("application/json");
  response.send(JSON.stringify({
    success: true,
    data: null
  }))
};

module.exports = endpoint;
