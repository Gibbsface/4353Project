const mysql = require("mysql");
let {argv} = require('yargs');
let {dbUsername, dbPassword} = argv;

dbUsername = dbUsername || "root"
dbPassword = dbPassword || "Puppies500"

let connection = mysql.createConnection({
  connectionLimit: 50,
  host: "localhost",
  user: dbUsername,
  password: dbPassword,
  database: "sql_database",
});

connection.connect(function (error) {
  if (!!error) {
    console.log("Error: Cannot connect to database");
  } else {
    console.log("Connected to database");
  }
});

module.exports = connection;
