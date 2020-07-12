const express = require('express');
const bodyparser = require('body-parser');
const multer = require('multer');
const cookieparser = require('cookie-parser');
const cors = require('cors');
const authMiddleware = require('./middleware/authentication_middleware');
let form_parser = multer();

const {argv} = require('yargs');

const {fuel_quote, quote_history, login, register, profile_info, profile_update, fuel_quote_post,} = require('./endpoints');

let app = express();

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

app.post("/api/fuel_quote_post", fuel_quote_post);

app.get('/api/profile_info', profile_info)

app.get('/api/quote_history', quote_history);

app.get('/api/fuel_quote', fuel_quote);

app.use(express.static(`project-frontend/build`));

app.listen(8080);
