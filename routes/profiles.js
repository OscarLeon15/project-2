const express = require('express');
const router  = express.Router();
const Profile = require('../models/Profile');

/* GET create profile page */
// TODO: add call to API load teams
  router.get('/private/create-profile', (req, res, next) => {  
  
  // load username information from req.user to separate profiles created by each user
  res.render('user/create-profile', { username: req.user.username });
});

// POST request to add new profile
router.post('/create-profile', (req, res, next) => {
  const { username, name, favoriteTeam, picture} = req.body;  

  const newProfile = new Profile({ username, name, favoriteTeam, picture});
  newProfile.save()
    .then((profile) => {
      res.redirect('/private-page')
    })
    .catch((err) => {
      console.log(err);
    });
});

// GET request to edit profile
router.get('/private/edit/:id', (req, res, next) => {
  // extract profile ID to search database
  const profileID = req.params.id;

  // find profile object using ID
  Profile.findOne({ _id: profileID })
    .then((profile) => {
      console.log(profile);
      res.render("user/edit-profile", { profile, username: req.user.username });
    })
    .catch((err) => {
      console.log(err);
    })  
});

module.exports = router;