const passport=require('passport')
const FacebookStrategy=require('passport-facebook').Strategy
const {facebookDb}=require('./database/db')
passport.use(new FacebookStrategy({
    clientID:process.env.FACEBOOK_CLIENT_ID,
    clientSecret:process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL:"http://localhost:9000/auth/facebook/callback"
},(request, accessToken, refreshToken,profile,done)=>{
    done(null,profile);
    facebookDb.findOne({facebookId:profile.id}).then((current)=>{
        if(current){
            console.log('Already');
        }else{
            new facebookDb({
                facebookId:profile.id,
                facebookName:profile.displayName,
            }).save().then((newUser)=>{
                console.log(`new User Created${newUser}` );
            })
        }
    })
}))
passport.serializeUser((user,done)=>{
done(null,user)
})
passport.deserializeUser((user,done)=>{
    done(null,user)
})