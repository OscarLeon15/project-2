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
  const { username, name, favoriteTeams, picture} = req.body;  

  const newProfile = new Profile({ username, name, favoriteTeams, picture});
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
  res.render("user/edit-profile");
});

module.exports = router;