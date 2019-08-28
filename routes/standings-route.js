const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/standings', (req, res, next) => {
  res.render('static-views/standings');
});

module.exports = router;
