const router=require("express").Router();
const express=require('express')
const multer=require('multer');

router.route("/addrequest").post((req,res)=>{
    let vehicleType=req.body.vehicleType;
    let startPoint=req.body.startPoint;
    let endPoint=req.body.endPoint;
    let mileage=req.body.mileage;

    const newRequest= new Request({
        vehicleType,
        startPoint,
        endPoint,
        mileage
    })

    newRequest.save().then(()=>{
        res.json("new request added")
    }).catch((err)=>{
        console.log("error occore in ",err);
    })
})

module.exports=router;