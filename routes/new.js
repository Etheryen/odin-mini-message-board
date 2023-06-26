const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();

router.get('/', (req, res) => {
  res.render('form', { title: 'Form' });
});

router.post('/', jsonParser, (req, res) => {
  console.log(req.body);
  res.send('yay');
});

module.exports = router;
