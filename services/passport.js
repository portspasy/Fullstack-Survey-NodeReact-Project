const passport = require("passport");
// Authenticate the users with Google
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      {
        console.log(`AccessToken: ${accessToken}`);
        console.log(`RefreshToken: ${refreshToken}`);
        console.log(`Profile: ${profile}`);
        console.log(`done: ${done}`);
      }
    }
  )
);