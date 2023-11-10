const express =require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors= require("cors");
const dotenv=require("dotenv")
const app=express();
require("dotenv").config();

const PORT1=process.env.PORT ||8080;

app.use(cors());
app.use(bodyParser.json());

const URL=process.env.MONGODB_URL;

mongoose.connect(URL,{
   // userCreateIndex:true,
   // userNewUrlParser:true,
   // useUnifiedTopologyL:true,
   // userFindAndModify:false
})

const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("Mongodb Connection success")
})

const userRouter = require("./routes/users.js");
const goodsRouter=require("./routes/goods.js");

app.use("/user",userRouter);
app.use("/item",goodsRouter);
app.use("/images",express.static("public/image"))

app.listen(PORT1,()=>{
    console.log('server is up and running no port '+PORT1);

})
