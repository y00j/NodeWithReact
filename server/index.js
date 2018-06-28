const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

passport.use(
  new GoogleStrategy({
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken) => {
      console.log(accessToken);
    }
  )
);

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'] //we are asking google for their profile and email -> there are more too
  })
);
//app is a running express server. most projects will just use just one of these
// app is a configuration to listen to requests coming in from node and route it to different route handlers

const PORT = process.env.PORT || 5000; //dynamic port binding with heroku --> sets default to 5000
app.listen(PORT);