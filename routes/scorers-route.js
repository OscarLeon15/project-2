const express = require('express');
const router  = express.Router();

router.get('/scorers/:league', (req, res, next) => {
  const leagueName = req.params.league;
  if (leagueName === 'Spain'){
    res.render('static-views/scorersLiga');
  } else if (leagueName === 'Italy'){
    res.render('static-views/scorersSerie');
  } else if (leagueName === 'England'){
    res.render('static-views/scorersPremier');
  }
    
});



module.exports = router;