const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vehicleSchema= new Schema({
    vehicleNo : {
        type:String,
        require:true

    },

    vehicleType :{
        type: String,
        require:true
    },
    sheatCapacity :{
        type: Number,
        require:true
    },
    avilableSheat:{
        type: Number,
        default: function () {
            return this.sheatCapacity; // Set default value to sheatCapacity
        }

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
        default: "yes",
        
    },
    availability:{

        
        type:String,
        default: "yes",
        
    },
    driverEmail:{
        type:String,
        require:true,
    },
    vehicleName:{
        type:String,
        required:true,
    }

})

const Vehicle=mongoose.model('Vehicle',vehicleSchema);

module.exports=Vehicle;