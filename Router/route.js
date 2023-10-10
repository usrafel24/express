const express=require('express')
const passport=require('passport')
const session=require("express-session")
require('../auth')
require('../facebookAuth')
const {register,deteted,login,registral,currentlogin}=require('../controller/controll')
const route=express.Router()

route.route('/register').post(register)
route.route('/delete/:id').delete(deteted)
route.route('/login').post(login)
route.route('/registral').get(registral)
route.route('/login').get(currentlogin)


// function loging(req,res,next) {
//     req.user ? next() :res.sendStatus(401)
// }
// route.use(passport.initialize())
route.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))

// GOOGLE


route.get('/auth/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

route.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/auth/google/success',
        failureRedirect: '/auth/google/failure'
}));

route.get("/auth/google/success",(req,res)=>{
  res.render('orthodoxFile')
})


// FACEBOOK

route.get('/auth/facebook',
passport.authenticate('facebook',{scope:['email']}))

route.get('/auth/facebook/callback',
passport.authenticate('facebook',{
  successRedirect:'/auth/facebook/success',
  failureRedirect:'/auth/facebook/failure'
}))
route.get('/auth/facebook/success',(req,res)=>{
res.render('orthodoxFile')
})
module.exports=route