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


//testing the news api
router.get('/teams-roster', (req, res, next) => {
  res.render('static-views/news');
})



module.exports = router;