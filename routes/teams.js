const express = require('express');
const router  = express.Router();

// const Team = require('../models/Team');
router.get('/teams/lineup', (req, res, next) => {
  res.render('team-views/team-lineup');
});



module.exports = router;

