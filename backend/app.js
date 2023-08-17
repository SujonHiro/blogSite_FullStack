const express =require("express")
const app= new express()
const router = require("./src/router/api")
const mongoose =require('mongoose');

const rateLimit =require('express-rate-limit');
const helmet =require('helmet');
const mongoSanitize =require('express-mongo-sanitize');
const hpp =require('hpp');
const cors =require('cors');

app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(hpp())

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

const limiter= rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter);


// Mongo DB Database Connection
let URI="mongodb+srv://<username>:<password>@cluster0.g8le02t.mongodb.net/Blogs"
let Option={user:'sujonhowlader',pass:'sujonhowlader',autoIndex:true}

mongoose.connect(URI,Option).then((res)=>{
    console.log("Success")
}).catch((err)=>{
    console.log(err)
})



app.use("/api/v1",router)

app.use("*",(req,res)=>{
    res.status(404).json({status:'Fail',data:"Not Found"})
})

module.exports=app