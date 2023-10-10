const mongoose=require('mongoose')
const dbs=mongoose.Schema(
    {
        
         Name:{
            type:String,
         },
         Lname:{
            type:String
         },
         Gmail:{
            type:String
         },
         Password:{
            type:String
         }





    }
    )
    const db=mongoose.model('db',dbs)

//GOOGLE
    const googleDbs=mongoose.Schema(
      {
          
           googleName:String,
             
           googleId:String
              
       
      }
  
  
  
  
      
      )
      const googleDb=mongoose.model('googleDb',googleDbs)


//FACEBOOK


const facebookDbs=mongoose.Schema({
   facebookId:String,
   facebookName:String
})
const facebookDb=mongoose.model('facebookDb',facebookDbs)

    module.exports={db,googleDb,facebookDb}
  