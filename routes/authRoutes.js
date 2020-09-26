const passport = require("passport");

module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  // Google OAuth Callbacks
  app.get("/auth/google/callback", passport.authenticate("google"));
};
