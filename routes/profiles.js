const express = require('express');
const router  = express.Router();

/* GET profile page */
router.get('/private/create-profile', (req, res, next) => {
  res.render('/user/create-profile.hbs');
});

module.exports = router;