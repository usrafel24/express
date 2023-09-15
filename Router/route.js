const express=require('express')
const {register,deteted,login,current,currentlogin,GmailAlready}=require('../controller/controll')
const route=express.Router()


route.route('/register').post(register)
route.route('/delete/:id').delete(deteted)
route.route('/login').post(login)
route.route('/home').get(current)
route.route('/login').get(currentlogin)
route.route('/h').get(GmailAlready)
module.exports=route