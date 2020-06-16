const express = require('express');

let app = express();

app.use(express.static(`project-frontend/build/`));

app.listen(8080);