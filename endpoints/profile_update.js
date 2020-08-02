let connection = require("../database");

const endpoint = function (request, response) {
  const changes = request.body.changes;
  if(changes.length == 0)
    return;

  for(c of changes){
    connection.query(
      `UPDATE client_information SET ${c.field} = "${c.value}"`,
      (e) => {console.log(e ? e : "Successfuly updated: "+c.field)});
  }
};

module.exports = endpoint;
