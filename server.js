const express = require('express');

const {fuel_quote, history, login, register, profile_info, profile_update} = require('./endpoints');

let app = express();

app.use(express.static(`project-frontend/build/`));

app.post('/login', login)

app.post('/register',register)

app.post('/profile_update',profile_update)

app.get('/profile_info', profile_info)

app.get('/quote_history', history);

app.get('/fuel_quote', fuel_quote);

app.listen(8080);