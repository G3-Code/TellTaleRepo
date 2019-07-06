const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");

require("./models/user");
require("./services/passport");
mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

/******************** BEFORE REFACTOR THIS IS THE CODE USED **************************** */
// const keys = require("./config/keys");
// const passport = require("passport");
// const GoogleStrategy = require("passport-google-oauth20").Strategy;
// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: keys.googleClientID,
//       clientSecret: keys.googleClientSecret,
//       callbackURL: "/auth/google/callback"
//     },
//     (accessToken, refreshToken, profile, done) => {
//       console.log(`:: REFRESH TOKEN :: ${refreshToken}`);
//       console.log(`:: ACCESS TOKEN :: ${accessToken}`);
//       console.log(`:: PROFILE :: ${JSON.stringify(profile)}`);
//     }
//   )
// );

// app.get(
//   "/auth/google",
//   passport.authenticate("google", {
//     scope: ["profile", "email"]
//   })
// );

// app.get("/auth/google/callback", passport.authenticate("google"));

// app.get("/", (req, res) => {
//   res.send({ message: `Hi there!!` });
// });
//http://localhost:5000/auth/google/callback
/************************************************ */
