const router=require("express").Router();
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
        vehicleNo,
        vehicleType,
        sheatCapacity,
        avilableSheat,
        driverName,
        vehicleImg
    })

    newVehicle.save().then(()=>{
        res.json("new vehicle added")
    }).catch((err)=>{
        console.log("error occore in",err);
    })
})