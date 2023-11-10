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
        type: String,
        require : true

    },
    driverName:{
        type: String,
        require:true,
    },
    vehicleImg:{

        data:Buffer,
        contentType: String
        
    }

})

const Vehicle=mongoose.model("Vehicle",vehicleSchema);

module.exports=Vehicle;