const express = require('express');
const bodyparser = require('body-parser');
const multer = require('multer');
const cookieparser = require('cookie-parser');
const cors = require('cors');
const authMiddleware = require('./middleware/authentication_middleware');
let form_parser = multer();

const {fuel_quote, history, login, register, profile_info, profile_update} = require('./endpoints');

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

app.get('/api/profile_info', profile_info)

app.get('/api/quote_history', history);

app.get('/api/fuel_quote', fuel_quote);

app.use(express.static(`project-frontend/build`));

app.listen(8080);