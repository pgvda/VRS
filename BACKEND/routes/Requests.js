const router=require("express").Router();
<<<<<<< HEAD
const express=require('express');
const mongoose = require('mongoose');
const multer=require('multer');
let Request =require("../model/Request");
const {requestCollection}=require('../config')

router.post("/addrequest", async (req, res) => {
    try {
        const {
            
            date,
            startTime,
            endTime,
            reason,
            vehicle,
            section,
            depatureLocation,
            destination,
            comeBack,
            distance,
            passengers,
            approveHead,
            approveDeenAr,
            applier,
            applyDate,
            driverStatus

        } = req.body;

        if (!Array.isArray(passengers)|| passengers.length === 0) {
            throw new Error('Passengers data is missing or invalid');
        }

        const firestoreDocRef = requestCollection.doc();
        const firestoreDocId = firestoreDocRef.id;

        Request.create({
            
            date,
            startTime,
            endTime,
            reason,
            vehicle,
            section,
            depatureLocation,
            destination,
            comeBack,
            distance,
            passengers,
            approveHead,
            approveDeenAr,
            applier,
            applyDate,
            driverStatus,
            firestoreId: firestoreDocId
        })

       
        await firestoreDocRef.set({
            id: firestoreDocId,
            date,
            startTime,
            endTime,
            reason,
            section,
            vehicle,
        
            depatureLocation,
            destination,
            comeBack,
            distance,
            passengers,
            
            approveHead:false,
            approveDeenAr:false,
            applier,
            applyDate,
            driverStatus:"notStart"


        });
        // Save request to MongoDB
        res.send({status:"ok"}) 

        // Save request to Firebase Realtime Database
        

        
    } catch (err) {
        console.error("Error occurred: ", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


router.route("/requests").get((req,res)=>{
    Request.find().then((Requests)=>{
        res.json(Requests)
    }).catch((err)=>{
        console.log(err)
    })
})


module.exports=router;
=======
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
>>>>>>> origin/main
