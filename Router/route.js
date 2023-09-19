const express=require('express')
const {register,deteted,login,registral,currentlogin}=require('../controller/controll')
const route=express.Router()


route.route('/register').post(register)
route.route('/delete/:id').delete(deteted)
route.route('/login').post(login)
route.route('/registral').get(registral)
route.route('/login').get(currentlogin)


module.exports=route