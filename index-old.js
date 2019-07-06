const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");
//const GoogleStrategy = require("passport-google-oauth20").Strategy;
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

//passport.use(new GoogleStrategy({
// clientId: keys.googleClientID,
// clientSecret: keys.googleClientSecret,
// callbackURL: '/auth/google/callback'
// }));

require("./routes/authRoutes")(app);
// app.get("/", (req, res) => {
//   res.send({ message: `Hi there!!` });
// });
//http://localhost:5000/auth/google/callback

const PORT = process.env.PORT || 5000;
app.listen(PORT);
