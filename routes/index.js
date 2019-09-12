const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// router.get('/news', (req, res, next) => {
//   res.render('team-views/team-roster');
// });

module.exports = router;
