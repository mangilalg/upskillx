import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import dotenv from 'dotenv';
dotenv.config();

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:5500/api/user/auth/google/callback",  // ✅ Make sure it matches Google Cloud Console
            passReqToCallback: true,
        },
        (request, accessToken, refreshToken, profile, done) => {
            return done(null, profile);
        }
    )
);

// ✅ Serialize User
passport.serializeUser((user, done) => {
    done(null, user);
});

// ✅ Deserialize User
passport.deserializeUser((user, done) => {
    done(null, user);
});
