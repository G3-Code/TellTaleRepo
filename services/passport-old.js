const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

//const User = require("../models/user");
const User = mongoose.model("users");

//Serializes the user details
passport.serializeUser((user, done) => {
  done(null, user.id);
});

//Deserializes the user details
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientId,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      //   console.log("access token", accessToken);
      //   console.log("refresh token", refreshToken);
      //   console.log("profile", profile);
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          // if the user already exists don't save to db
          done(null, existingUser);
        } else {
          // if the user does not exists save it to db
          new User({ googleId: profile.id }).save().then(user => {
            done(null, user);
          });
        }
      });
    }
  )
);