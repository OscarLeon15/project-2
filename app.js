require('dotenv').config();
const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');

const bcrypt      = require('bcryptjs');
const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const User = require('./models/User');
const Profile = require('./models/Profile');

mongoose

 .connect(process.env.MONGODB_URI, {useMongoClients: true})
//  .connect('mongodb://localhost/project-2', {useNewUrlParser: true})
 .then(x => {
   console.log(`Connected to Mongo! Database name:  ${x.connections[0].name}`)
 })
 .catch(err => {
   console.error('Error connecting to mongo', err)
 });
 
const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);
const app = express();
// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
 secret: "our-passport-local-strategy-app",
 resave: true,
 saveUninitialized: true
}));
passport.serializeUser((user, cb) => {
 cb(null, user._id);
});
passport.deserializeUser((id, cb) => {
 User.findById(id, (err, user) => {
   if (err) { return cb(err); }
   cb(null, user);
 });
});
app.use(flash());
passport.use(new LocalStrategy((username, password, next) => {
 // passReqToCallback: true;
 User.findOne({ username }, (err, user) => {
   if (err) {
     return next(err);
   }
   if (!user) {
     return next(null, false, { message: "Incorrect username" });
   }
   if (!bcrypt.compareSync(password, user.password)) {
     return next(null, false, { message: "Incorrect password" });
   }
   return next(null, user);
 });
}));
// app.js
app.use(passport.initialize());
app.use(passport.session());
// Express View engine setup
app.use(require('node-sass-middleware')({
 src:  path.join(__dirname, 'public'),
 dest: path.join(__dirname, 'public'),
 sourceMap: true
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

// default value for title local
app.locals.title = 'Live Football Updates';



const index = require('./routes/index');
app.use('/', index);

// app.js
// Mongoose configuration
mongoose.Promise = Promise;
mongoose
 .connect('mongodb://localhost/project-2')
 .then(() => {
   console.log('Connected to Mongo!')
 }).catch(err => {
   console.error('Error connecting to mongo', err)
 });
// ...other code

// Routes

const teamRoutes = require('./routes/teams');
app.use('/',teamRoutes); 

const router = require("./routes/users");
app.use('/', router);

// connect profiles route
const profilesRoute = require('./routes/profiles');
app.use('/', profilesRoute);

// connect to standings
const standings = require('./routes/standings-route');
app.use('/', standings);

// connect to scorers
const score = require('./routes/scorers-route');
app.use('/', score);



module.exports = app;