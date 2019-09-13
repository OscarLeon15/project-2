const express = require('express');
const router  = express.Router();



router.get('/standings/:league', (req, res, next) => {
  const leagueName = req.params.league;
  if (leagueName === 'Spain'){
    res.render('static-views/standingsSpain');
  } else if (leagueName === 'Italy'){
    res.render('static-views/standingsSerie');
  } else if (leagueName === 'England'){
    res.render('static-views/standingsPremier');
  }
    
});



module.exports = router;



