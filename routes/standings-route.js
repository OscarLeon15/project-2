const express = require('express');
const router  = express.Router();



router.get('/standings/:league', (req, res, next) => {
  const leagueName = req.params.league;
  console.log(leagueName);
    res.render('static-views/standings', { name });
});


router.get('/standingsSerieA', (req, res, next) => {
  res.render('static-views/standingsSerie');
});

router.get('/standingsPremier', (req, res, next) => {
  res.render('static-views/standingsPremier');
});

module.exports = router;



