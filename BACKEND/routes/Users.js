const router=require("express").Router();
const express=require('express')
const multer=require('multer');
const User = require("../model/User");

router.route("/addusers").post((res,req)=>{
    let fristName=req.body.fristName;
    let lastName=req.body.lastName;
    let email=req.body.email;
    let department=req.body.department;
    let password=req.body.password;
    let repassword=req.body.repassword;
    let position=req.body.position;
    let telNo=req.body.telNo;
    let userImg=req.body.userImg;

    const newUser=new User({
        fristName,
        lastName,
        email,
        department,
        password,
        repassword,
        position,
        telNo,
        userImg
    })

    newUser.save().then(()=>{
        res.json("new user added")
    }).catch((err)=>{
        console.log("error occore in ",err);
    })

    router.route("/item").get((req,res)=>{
        Goods.find().then((goods)=>{
            res.json(goods)
        }).catch((err)=>{
            console.log(err)
        })
    
    })
})

module.exports=router;