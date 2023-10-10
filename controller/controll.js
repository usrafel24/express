
const {db}=require('../database/db')
const nodemailer = require("nodemailer");

// const bcrypt=require('bcrypt')

// const jwt=require('jsonwebtoken')
const register=async(req,res)=>{
    const {Name,Lname,Gmail,Password}=req.body
    if(!Name||!Lname||!Gmail||!Password){
        res.json({message:"not found"})
        console.log('not found');
    }else{
         const Gmailcheck=await db.findOne({Gmail})
         if(Gmailcheck){ 
            res.send(`<h1 style="text-align: center; color:red;margin-top:250px,font-size:40px">Gmail is Already</h1>`)
    
        console.log('Gmail is Already');
         }else{
            // const security=await bcrypt.hash(Password,10)
            // console.log(security);
        await db.create({Name,Lname,Gmail,Password})
        // res.json(regis)
        // res.status(200).render('GmailAlready')

       

       
            // host: "smtp.forwardemail.net",
      // port: 465,
      // secure: true,
    
    
   
  const transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
      user: "surafeld671@gmail.com",
      pass: "ixmy dkbn scmb cgqe",
    },
  })
//   ` <h1>Almost there!</h1>
//   <h3>We've sent you an email at</h3>
//   <p>Please follow the instructions in the email.</p>
//   <a href="https://orthodox1221.netlify.app/">VERIFICATION EMAIL SEND
//   <h3>${toMail}</h3>
    
      const toMail=req.body.Gmail
      const info = {
        from: 'surafeld671@gmail.com', // sender address
        to: `${toMail}`, // list of receivers
        subject: "Welcome ✔", // Subject line
        text: "Hello world?", // plain text body
        html: ` <h1>Almost there!</h1>
        <a href="https://orthodox1221.netlify.app/">VERIFICATION EMAIL SEND`, // html body
      }
    transporter.sendMail(info,(error,info)=>{
      if(error){
          console.log(error);
      }else{
          console.log("Message sent: %s", info.messageId);
          res.write(`<h1>A verification link to activate your key was sent to:${toMail}</h1>`)
          res.send()
      }
    })
    







         }

        
    }
  
}





const deteted=async(req,res)=>{
    const {id}=req.params
    const deleted=await db.findByIdAndDelete(id,req.body)
    if(!deleted){
        console.log('not found');
    }else{
       
    const delet=await db.find({})
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

            const gmaleCheck=await db.findOne({Gmail})
            const passswordChack=await db.findOne({Password})
       
    if (gmaleCheck && passswordChack) {
       
        res.status(200).render('GmailAlready')
    }else{
        res.send('<h1> Sorry not match gmail and password please try again !!!')
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
const registral=async(req,res)=>{
res.status(200).render('registral')
}
const currentlogin=async(req,res)=>{
    res.status(200).render('login')
    }

  
        

      
module.exports={register,deteted,login,registral,currentlogin}