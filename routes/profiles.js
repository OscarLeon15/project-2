const express = require('express');
const router  = express.Router();
const Profile = require('../models/Profile');

/* GET create profile page */
// TODO: add call to DB load teams
  router.get('/private/create-profile', (req, res, next) => {  
  
  // load username information from req.user to separate profiles created by each user
  res.render('user/create-profile', { username: req.user.username });
});

// POST request to add new profile
router.post('/create-profile', (req, res, next) => {
  const { username, name, favoriteLeague, favoriteTeam, picture} = req.body;  

  const newProfile = new Profile({ username, name, favoriteLeague, favoriteTeam, picture});
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
      res.render("user/edit-profile", { profile, username: req.user.username });
    })
    .catch((err) => {
      console.log(err);
    })  
});

// POST request to save updated profile
router.post('/private/edit/:id', (req, res, next) => {
  const { username, name, favoriteLeague, favoriteTeam, picture } = req.body;
  const profileID = req.params.id;
  Profile.update({ _id: profileID }, { $set: { username, name, favoriteLeague, favoriteTeam, picture }})
    .then((profile) => {
      res.redirect('/private-page');
    })
    .catch((err) => {
      console.log(err);
    });  
});

// POST request to delete profile
router.post('/private/delete/:id', (req, res, next) => { 
  const profileID = req.params.id;
  Profile.findByIdAndRemove(profileID)
    .then(() => {
      res.redirect('/private-page');
    })
    .catch((err) => {
      console.log(err);
    });  
});

module.exports = router;