const express = require('express');
const router  = express.Router();
const Profile = require('../models/Profile');

/* GET profile page */
// TODO: add call to API load teams
router.get('/private/create-profile', (req, res, next) => {  
  res.render('user/create-profile', { username: req.user.username });
});

// POST request to add new profile
router.post('/create-profile', (req, res, next) => {
  const { username, name, favoriteTeams, picture} = req.body;
  console.log(req.user.username);
  console.log(req.body);

  const newProfile = new Profile({ username, name, favoriteTeams, picture});
  newProfile.save()
    .then((profile) => {
      res.redirect('/private-page')
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;