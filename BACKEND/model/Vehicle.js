const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vehicleSchema= new Schema({
    vehicleNo : {
        type:String,
        require:true

    },

    vehileType :{
        type: String,
        require:true
    },
    sheatCapacity :{
        type: Number,
        require:true
    },
    avilableSheat:{
        type: Number,
        require : true

    },
    driverName:{
        type: String,
        require:true,
    },
    vehicleImg:{

        type:String,
        
    },
    status:{

        type:String,
        require:true,
        
    },
    availability:{

        
        type:String,
        require:true,
        
    },
    driverEmail:{
        type:String,
        require:true,
    },
    vehicle:{
        type:String,
        require:true,
    }

})

const Vehicle=mongoose.model('Vehicle',vehicleSchema);

module.exports=Vehicle;