const express = require('express');
const router  = express.Router();
const Profile = require('../models/Profile');

/* GET profile page */
router.get('/private/create-profile', (req, res, next) => {
  res.render('user/create-profile');
});

// add POST request for API variables
router.post('/create-profile', (req, res, next) => {
  const { name, favoriteTeams, picture} = req.body;
  console.log(req.body);

  const newProfile = new Profile({ name, favoriteTeams, picture});
  newProfile.save()
    .then((profile) => {
      res.redirect('/private/create-profile')
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;