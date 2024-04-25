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
<<<<<<< HEAD
        type: Number,
=======
        type: String,
>>>>>>> origin/main
        require : true

    },
    driverName:{
        type: String,
        require:true,
    },
    vehicleImg:{

<<<<<<< HEAD
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
=======
        data:Buffer,
        contentType: String
        
>>>>>>> origin/main
    }

})

<<<<<<< HEAD
const Vehicle=mongoose.model('Vehicle',vehicleSchema);
=======
const Vehicle=mongoose.model("Vehicle",vehicleSchema);
>>>>>>> origin/main

module.exports=Vehicle;