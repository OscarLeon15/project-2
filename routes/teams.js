const express = require('express');
const router  = express.Router();
const Team    = require('../models/Team');



// router.get('/teams/roster', (req, res, next) => {
//   res.render('team-views/team-roster');
// });
router.get('/teams/edit', (req, res, next) => {
  res.render('team-views/team-edit');
});
router.get('/teams/creation', (req, res, next) => {
  res.render('team-views/team-creation');
});





module.exports = router;

