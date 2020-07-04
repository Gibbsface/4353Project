const express = require('express');
const bodyparser = require('body-parser');
const multer = require('multer');
const cookieparser = require('cookie-parser');
const cors = require('cors');
const authMiddleware = require('./middleware/authentication_middleware');
//const mysql = require("mysql");
let form_parser = multer();

const {fuel_quote, quote_history, login, register, profile_info, profile_update} = require('./endpoints');

let app = express();

/* 
let connection = mysql.createPool({
  connectionLimit: 50,
  host: "localhost",
  user: "root",
  password: "",
  database: "sql_database",
});

app.get("/", function (req, resp) {
  connection.getConnection(function (error, tempCont) {
    //tempCont is temporary connection variable
    if (!!error) {
      tempCont.release();
      console.log("Error: Cannot connect to database");
    } else {
      console.log("Connected to database");
      tempCont.query("SELECT * FROM user_credentials", function (
        error,
        rows,
        fields
      ) {
        if (!!error) {
          tempCont.release();
          console.log("Error in Query");
        } else {
          resp.json(rows);
        }
      });
    }
  });
}); */

app.use(cors({
    origin: true,
    credentials: true
}));
app.use(cookieparser())
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}))
app.use(form_parser.none())
app.use(authMiddleware);

app.post('/api/login', login)

app.post('/api/register',register)

app.post('/api/profile_update',profile_update)

app.get('/api/profile_info', profile_info)

app.get('/api/quote_history', quote_history);

app.get('/api/fuel_quote', fuel_quote);

app.use(express.static(`project-frontend/build`));

app.listen(8080);
