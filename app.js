const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const newRouter = require('./routes/new');
const notFoundRouter = require('./routes/404');

const app = express();

app.use(bodyParser.urlencoded());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', indexRouter);
app.use('/new', newRouter);
app.use('*', notFoundRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
