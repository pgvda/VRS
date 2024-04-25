const express =require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors= require("cors");
const dotenv=require("dotenv")
const app=express();
require("dotenv").config();

<<<<<<< HEAD
const http = require('http');
const websocket = require('./webShocket.js');


const server = http.createServer(app);


const PORT1=process.env.PORT ||8080;
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Location trcking server running on port ${PORT}`);
  });
=======
const PORT1=process.env.PORT ||8080;
>>>>>>> origin/main

app.use(cors());
app.use(bodyParser.json());

const URL=process.env.MONGODB_URL;

mongoose.connect(URL,{
<<<<<<< HEAD
    
=======
>>>>>>> origin/main
   // userCreateIndex:true,
   // userNewUrlParser:true,
   // useUnifiedTopologyL:true,
   // userFindAndModify:false
})

const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("Mongodb Connection success")
})

const requestRouter = require("./routes/Requests.js");
const userRouter=require("./routes/Users.js");
const vehicleRouter=require("./routes/Vehicles.js");
<<<<<<< HEAD
const locationDetail = require("./routes/LocationTrackers.js")
const costDtail = require("./routes/CostCalculations.js")
const feedbackRouter = require("./routes/Feedbacks.js");
=======
>>>>>>> origin/main

app.use("/request",requestRouter);
app.use("/user",userRouter);
app.use("/vehicle",vehicleRouter);
<<<<<<< HEAD
app.use("/location-details",locationDetail)
app.use("/cost",costDtail)
app.use("/user/feedback",feedbackRouter);
=======
>>>>>>> origin/main

app.listen(PORT1,()=>{
    console.log('server is up and running no port '+PORT1);

})
