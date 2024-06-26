const router=require("express").Router();
<<<<<<< HEAD
const express=require('express');
const bodyParser = require('body-parser');

const Vehicle = require("../model/Vehicle");
const {vehicleCollection}=require('../config')

const app =express()
const path=require('path')  

app.use(bodyParser.json({ limit: '1000mb' })); // Adjust the limit based on your needs
app.use(bodyParser.urlencoded({ extended: true, limit: '1000mb' })); // Adjust the limit based on your needs

//add vehicle



router.route("/addVehicle").post(async(req,res)=>{
    let vehicleNo=req.body.vehicleNo;
    let vehicleType=req.body.vehicleType;
    let sheatCapacity=req.body.sheatCapacity;
    let avilableSheat=req.body.avilableSheat;
    let driverName=req.body.driverName;
    let status=req.body.status;
    let availability=req.body.availability;
    let {vehicleImg} =req.body;
    let driverEmail=req.body.driverEmail;
    let vehicle=req.body.vehicle;
    
    try{
      Vehicle.create({         
        vehicleNo,
=======
const express=require('express')
const multer=require('multer');

router.route("/addVehicle").post((req,res)=>{
    let vehicleNo=req.body.vehicleNo;
    let vehicleType=req.body.vehicleNo;
    let sheatCapacity=req.body.sheatCapacity;
    let avilableSheat=req.body.avilableSheat;
    let driverName=req.body.driverName;
    let vehicleImg=req.body.vehicleImg;


    const newVehicle=new Vehicle({
>>>>>>> origin/main
        vehicleNo,
        vehicleType,
        sheatCapacity,
        avilableSheat,
        driverName,
<<<<<<< HEAD
        status,
        availability,
        vehicleImg,
        driverEmail,
        vehicle
      })

        await vehicleCollection.doc(vehicleNo).set({
          vehicleNo,
          vehicleType,
          sheatCapacity,
          avilableSheat,
          driverName,
          status,
          availability,
         
        driverEmail,
        vehicle
          
          
          
        }); 

      res.send({status:"ok"})  
      
    }catch(error){
      console.error(error.message)
    }
    

    
})

//read all vehicles
router.get('/vehicles', async (req, res) => {
    try {
      const vehicles = await Vehicle.find();
      res.json(vehicles);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

  //delete vehicle by id
  router.delete('/vehicles/:id', async (req, res) => {
    try {
      const vehicleId = req.params.id;
      const vehicle = await Vehicle.findByIdAndDelete(vehicleId);
  
      if (!vehicle) {
        return res.status(404).json({ message: 'vehicle not found' });
      }
  
      res.json({ message: 'vehicle deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  
  //update vehicle by id
  router.put('/updateVeh/:id', async (req, res) => {
    const vehicleId = req.params.id;
    const updatedvehicle = req.body;
  
    try {
      const vehicle = await Vehicle.findByIdAndUpdate(vehicleId, updatedvehicle, { new: true });
  
      if (!vehicle) {
        return res.status(404).json({ message: 'vehicle not found' });
      }
  
      return res.status(200).json({ message: 'vehicle updated successfully', vehicle });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Server error' });
    }
  });
//all functions are working
=======
        vehicleImg
    })

    newVehicle.save().then(()=>{
        res.json("new vehicle added")
    }).catch((err)=>{
        console.log("error occore in",err);
    })
})

>>>>>>> origin/main
module.exports=router;