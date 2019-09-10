const express = require('express');
const router  = express.Router();


router.get('/scorersLaLiga', (req, res, next) => {
    res.render('static-views/scorersLiga');
})

router.get('/scorersSerieA', (req, res, next) => {
  res.render('static-views/scorersSerie');
});

router.get('/scorersPremier', (req, res, next) => {
  res.render('static-views/scorersPremier');
});

module.exports = router;