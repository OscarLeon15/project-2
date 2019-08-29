const express = require('express');
const router  = express.Router();


router.get('/standingsLaLiga', (req, res, next) => {
  res.render('static-views/standingsLiga');
});

router.get('/standingsSerieA', (req, res, next) => {
  res.render('static-views/standingsSerie');
});

router.get('/standingsPremier', (req, res, next) => {
  res.render('static-views/standingsPremier');
});

module.exports = router;
