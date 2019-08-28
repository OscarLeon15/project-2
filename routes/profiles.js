const express = require('express');
const router  = express.Router();

/* GET profile page */
router.get('/private/create-profile', (req, res, next) => {
<<<<<<< HEAD
  res.render('user/create-profile.hbs');
=======
  res.render('user/create-profile');
>>>>>>> 4548d0a098c7e4a14b0067d87edd1b6f4f2458b6
});



module.exports = router;