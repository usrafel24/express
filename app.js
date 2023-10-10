require('dotenv').config()
const express=require('express')
const  mongoose  = require('mongoose')
const route=require('./Router/route')
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(route)
app.set('view engine','ejs')
app.use(express.static('public'))
const PORT=process.env.PORT || 9000
const URL=process.env.MONGO_URL

mongoose.connect(URL)
.then(()=>{
    console.log('server is connected');
})
.catch((error)=>{
    console.log('not connected',error);
})

app.listen(PORT,()=>{
    console.log(`server is running http://localhost: ${PORT}`);
})