const dbs=require('../database/db')
const bcrypt=require('bcrypt')
// const { decrypt } = require('dotenv')
const jwt=require('jsonwebtoken')
const register=async(req,res)=>{
    const {Name,Lname,Gmail,Password}=req.body
    if(!Name||!Lname||!Gmail||!Password){
        res.json({message:"not found"})
        console.log('not found');
    }else{
         const Gmailcheck=await dbs.findOne({Gmail})
         if(Gmailcheck){ 
            res.json({message:"Gmail is Already"})
        console.log('Gmail is Already');
         }else{
            const security=await bcrypt.hash(Password,10)
            // console.log(security);
const regis=await dbs.create({Name,Lname,Gmail,Password})
        res.json(regis)
       
         }

        
    }

}





const deteted=async(req,res)=>{
    const {id}=req.params
    const deleted=await dbs.findByIdAndDelete(id,req.body)
    if(!deleted){
        console.log('not found');
    }else{
       
    const delet=await dbs.find({})
    res.json({delet})
            console.log('delete');

        }
        
    }


    const login=async(req,res)=>{
        const {Gmail,Password}=req.body
        if(!Gmail||!Password){
res.json({message:"not found"})
        }
        else{

            const gma=await dbs.findOne({Gmail})
            const pas=await dbs.findOne({Password})
       
    if (gma && pas) {
       
        res.json({message:"yes"})
    }else{
        res.send('no')
    }
    }
            // const aaaa=await dbs.findOne({Gmail})
            // const comp=await bcrypt.compare(Password,aaaa.Password)
            // if (aaaa && comp) {
            //     const accese_token= jwt.sign({
            //         aaaa:{
            //             Id:aaaa.Id,
            //             Name:aaaa.Name,
            //             Lname:aaaa.Lname,
            //             Gmail:aaaa.Gmail,
            //             Password:aaaa.Password
            //         }
            //     },
            //     process.env.ACCESS_TOKEN,{expiresIn:"1m"})
            //     res.json({accese_token})
            // }else{
            //     res.send('errrrrrrrrrrrrrrrrrrrrrrrr')
            // }
       

    }
const current=async(req,res)=>{
res.status(200).render('home')
}
const currentlogin=async(req,res)=>{
    res.status(200).render('login')
    }
module.exports={register,deteted,login,current,currentlogin}