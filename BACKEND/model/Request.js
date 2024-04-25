const mongoose = require('mongoose');

const Schema = mongoose.Schema;

<<<<<<< HEAD
const passengerSchema = new mongoose.Schema({
    name: String,
    position: String,
    pickup: String,
    drop: String
  });

const requestSchema= new Schema({
    

    date : {
        type:Date,
=======
const requestSchema= new Schema({
    vehicleType : {
        type:String,
>>>>>>> origin/main
        require:true

    },

<<<<<<< HEAD
    startTime :{
        type: String,
        require:true
    },
    endTime :{
        type: String,
        require:true
    },
    reason:{
        type: String,
        require : true

    },
    section:{
        type: String,
        require : true

    },
    vehicle:{
        type: String,
        require : true

    },
    depatureLocation:{
        type: String,
        require : true

    },
    destination:{
        type: String,
        require : true

    },
    comeBack:{
        type: Boolean,
        require : true

    },
    distance:{
        type: Number,
        require : true

    },
    approveHead:{
        type: Boolean,
        default: false
    },
    approveDeenAr:{
        type: Boolean,
        default: false

    },
    driverStatus:{
        type: String,
        default: "notStart"

    },
   
    applier :{
        type: String,
        require:true
    },applyDate :{
        type: Date,
        require:true
    },
    passengers: [passengerSchema]
=======
    startPoint :{
        type: String,
        require:true
    },
    endPoint :{
        type: Number,
        require:true
    },
    mileage:{
        type: Number,
        require : true

    }
>>>>>>> origin/main


})

<<<<<<< HEAD




  const Request = mongoose.model('Request', requestSchema);

  module.exports = Request;


=======
const Request=mongoose.model("Request",requestSchema);

module.exports=Request;
>>>>>>> origin/main
