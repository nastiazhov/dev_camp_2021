const passport = require('passport');
const GoogleTokenStrategy = require('passport-google-token').Strategy;
const { createNewUser, getUserByEmail } = require('../services/users');
const config = require('./config');

module.exports = () => {
  const registerStrategy = () => {
    passport.use(
      new GoogleTokenStrategy(
        {
          clientID: config.googleClientId,
          clientSecret: config.clientSecret,
        },
        async (accessToken, refreshToken, profile, done) => {
          const [{ value: email }] = profile.emails;
          let user = await getUserByEmail(email);
          if (!user) {
            await createNewUser({
              firstName: profile.name.givenName,
              secondName: profile.name.familyName,
              email,
            });
            user = await getUserByEmail(email);
          }
          return done(null, {
            userId: user.userId,
            firstName: user.firstName,
            secondName: user.secondName,
            email: user.email,
          });
        },
      ),
    );
  };

  return { registerStrategy, passport };
};