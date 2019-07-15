var express = require('express');
var router = express.Router();

/* GET books listing. */
router.get('/books', function(req, res, next) {
  res.render('books', { list: [
    { title: 'hoge1', author: 'mm1' },
    { title: 'hoge2', author: 'mm2' },
    { title: 'hoge3', author: 'mm3' },
    { title: 'hoge4', author: 'mm4' },
    { title: 'hoge5', author: 'mm5' },
    { title: 'hoge6', author: 'mm6' },
  ]});
});

router.get('/books/register', function(req, res, next) {
  res.send('input new book');
});

router.get('/books/register/done', function(req, res, next) {
  res.redirect('/books');
});

module.exports = router;
