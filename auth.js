const passport=require('passport')
const {googleDb}=require('./database/db')
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

passport.use(new GoogleStrategy({
    clientID:    process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:9000/auth/google/callback",
    passReqToCallback   : true
  },
  (request, accessToken, refreshToken, profile, done)=> {
   
     done(null,profile);
    googleDb.findOne({googleId:profile.id}).then((current)=>{
        if (current) {
            console.log('id is already');
            
        }else{
            new googleDb({
                googleName:profile.displayName,
                googleId:profile.id
            }).save().then((newUser)=>{
                console.log(`created ${newUser}`);
            })
        }
    })
   
  }
));
passport.serializeUser((user,done)=>{
    done(null,user);
})
passport.deserializeUser((user,done)=>{
    done(null,user);
})