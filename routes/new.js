const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const messages = require('../data/messages');

router.get('/', (req, res) => {
  res.render('form', { title: 'Form' });
});

router.post('/', (req, res) => {
  if (!req.body.author || !req.body.message) return;

  messages.push({
    user: req.body.author,
    text: req.body.message,
    added: new Date(),
  });

  res.redirect('/');
});

module.exports = router;
