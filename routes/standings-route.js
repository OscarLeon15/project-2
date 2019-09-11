const express = require('express');
const router  = express.Router();



router.get('/standings/:league', (req, res, next) => {
  const leagueName = req.params.league;
  if (leagueName === 'Spain'){
    res.render('static-views/standings');
  } else if (leagueName === 'Italy'){
    res.render('static-views/standingsSerie');
  } else if (leagueName === 'England'){
    res.render('static-views/standingsPremier');
  }
    
});


router.get('/standingsSerieA', (req, res, next) => {
  res.render('static-views/standingsSerie');
});

router.get('/standingsPremier', (req, res, next) => {
  res.render('static-views/standingsPremier');
});

module.exports = router;



