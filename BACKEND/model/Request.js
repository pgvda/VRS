const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const requestSchema= new Schema({
    vehicleType : {
        type:String,
        require:true

    },

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


})

const Request=mongoose.model("Request",requestSchema);

module.exports=Request;