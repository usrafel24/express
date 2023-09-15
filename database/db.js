const mongoose=require('mongoose')
const dbs=mongoose.Schema(
    {
         Id:{
            type:Number
         },
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
    module.exports=db
  