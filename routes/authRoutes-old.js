const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));

  //Adding a comment here will help - This is for logoug
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });

  //This is a route for current user
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
