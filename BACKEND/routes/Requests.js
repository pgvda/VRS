const router=require("express").Router();
const express=require('express');
const mongoose = require('mongoose');
const multer=require('multer');
let Request =require("../model/Request");
const {requestCollection}=require('../config')
const admin = require('firebase-admin');


  
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
        
        
const message = {
            data: {
                title: 'New Reservation',
                body: 'A new reservation has been added.',
                // You can add more custom data to be sent with the notification
            },
            topic: 'drivers', // The topic to which drivers are subscribed
        };

        // Send the message to the devices subscribed to the provided topic
        const response = await admin.messaging().send(message);

        // Handle response if needed
        console.log('FCM notification sent:', response);
        
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
router.route("/viewRequest/:id").get((req,res)=>{

    let requestId = req.params.id;

    Request.findById(requestId).then((Request)=>{
        res.json(Request)
    }).catch((err)=>{
        console.log(err)
    })
})
router.put("/updateRequest1/:id", async (req, res) => {
    try {
        const requestId = req.params.id;
        const requestData = req.body;

        if (!Array.isArray(requestData.passengers) || requestData.passengers.length === 0) {
            throw new Error('Passengers data is missing or invalid');
        }

        const updatedRequest = await Request.findByIdAndUpdate(requestId, requestData, { new: true });

        if (!updatedRequest) {
            return res.status(404).json({ message: "Request not found" });
        }

        res.json({ status: "ok", updatedRequest });
    } catch (error) {
        console.error("Error occurred: ", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


module.exports=router;
