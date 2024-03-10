const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const costSchema= new Schema({
    fuelConsumption : {
        type:Number,
        require:true

    },

    vehicleNo :{
        type: String,
        require:true
    },

    driverName:{
        type:String,
        require:true
    },

    distance :{
        type: Number,
        require : true
    },

    fuelPrice :{
        type:Number,
        require:true
    },

    totalCost :{
        type :Number,
        require : true
    }
})

const CostDetails=mongoose.model("CostDetails",costSchema);

module.exports=CostDetails;