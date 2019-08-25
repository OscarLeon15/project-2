// // routes/auth-routes.js
// const express = require("express");
// const router = express.Router();
// const passport = require("passport");
// // User model
// const User = require("../models/user");
// // /routes/auth-routes.js
// const ensureLogin = require("connect-ensure-login");

// // Bcrypt to encrypt passwords
// const bcrypt = require("bcryptjs");
// const bcryptSalt = 10;

// router.get("/signup", (req, res, next) => {
//   res.render("auth/signup");
// });

// router.post("/signup", (req, res, next) => {
//   const username = req.body.username;
//   const password = req.body.password;

//   if (username === "" || password === "") {
//     res.render("auth/signup", { message: "Indicate username and password" });
//     return;
//   }

//   User.findOne({ username })
//   .then(user => {
//     if (user !== null) {
//       res.render("auth/signup", { message: "The username already exists" });
//       return;
//     }

//     const salt = bcrypt.genSaltSync(bcryptSalt);
//     const hashPass = bcrypt.hashSync(password, salt);
  
//     const newUser = new User({
//       username,
//       password: hashPass
//     });

//     newUser.save((err) => {
//       if (err) {
//         res.render("auth/signup", { message: "Something went wrong" });
//       } else {
//         res.redirect("/");
//       }
//     });
//   })
//   .catch(error => {
//     next(error)
//   })
// });

// router.get("/login", (req, res, next) => {
//   res.render("auth/login", { "message": req.flash("error") });
// });

// router.post("/login", passport.authenticate("local", {
//   successRedirect: "/private-page",
//   failureRedirect: "/login",
//   failureFlash: true,
//   passReqToCallback: true
// }));
// router.get("/private-page", ensureLogin.ensureLoggedIn(), (req, res) => {
//   res.render("private", { user: req.user });
// });

// router.get("/logout", (req, res) => {
//   req.logout();
//   res.redirect("/login");
// });
// module.exports = router;