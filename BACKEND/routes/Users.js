const router=require("express").Router();
<<<<<<< HEAD
const express=require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const User = require("../model/User");


// user signup 

router.post('/signup',async(req,res)=>{
    try{
        const fristName = req.body.fristName;
        const lastName = req.body.lastName;
        const department = req.body.department;
        const email = req.body.email;
        const designation  = req.body.designation ;//drop down
        const password = req.body.password; 
        const repassword = req.body.repassword;
        const telNo = req.body.telNo;   
            
        
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ message: 'User already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
    
        const newUser = new User({
          fristName,
          lastName,
          department,
          designation ,
          email,
          password: hashedPassword,
          repassword,
          telNo,
          

        });
        
        await newUser.save();
    
        res.status(201).json({ message: 'User registered successfully' });
    }catch (error) {
        res.status(500).json({ message: 'Internal server error' });
      }





})
// User login


const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'dilshanariyarathna1999@gmail.com',
    pass: 'trwr oqgt hzbf lojm' 
  }
});

router.route("/login").post((req,res)=>{
    const email = req.body.email; 
    const password = req.body.password;

    const generateToken=(id)=>{
      return jwt.sign({id},process.env.JWT_SE,{
          expiresIn:"1h",
      });
    };
  
    if(email == "" || password == "" ){
        res.json({
            status : "FAILED" , 
            message: "Empty input  email or password"
        });
    }else {
        //checking exist user
        const user=User.findOne({email}).then((user)=>{
            if(user){
                //user exist
  const hashedPassword = user.password;
                bcrypt.compare(password,hashedPassword).then((result)=>{
                    if(result){
                        res.json({
                          _id:user._id,
                          email:user.email,
                          fristName:user.fristName,
                          lastName:user.lastName,
                          designation:user.designation,
                          token:generateToken(user._id)
                          
                        });
                        
                    }else{
                      sendUnauthorizedLoginEmail(email);
                        res.json({
                            status : "FAILED" , 
                            message: "Invalied password"
                        });
                    }
                }).catch(()=>{
                  sendUnauthorizedLoginEmail(email);
                    res.json({
                        status : "FAILED" , 
                        message: "An error occurred while comparing"
                    });
                })
            }else{
              sendUnauthorizedLoginEmail(email);
                res.json({
                    status : "FAILED" , 
                    message: "invalied email"
                });
            }
        }).catch(()=>{
          sendUnauthorizedLoginEmail(email);
            res.json({
                status : "FAILED" , 
                message: "An error occurred while checking for existing user"
            });
        })
  
  
    }
  
  })


  const sendUnauthorizedLoginEmail = async (email) => {
    const mailOptions = {
      from: 'dilshanariyarathna1999@gmail.com',
      to: email,
      subject: 'Unauthorized Login Attempt',
      text: 'There was an unauthorized login attempt using your email address. Please ensure your account security.'
    };
  
    try {
      await transporter.sendMail(mailOptions);
      console.log('Unauthorized login email notification sent successfully.');
    } catch (error) {
      console.error('Error sending unauthorized login email notification:', error);
    }
  };
  


// all user data read
router.get('/users', async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

  // delete user using id
  router.delete('/users/:id', async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await User.findByIdAndDelete(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'user not found' });
      }
  
      res.json({ message: 'user deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  
  // update user using id
  router.put('/update/:id', async (req, res) => {
    const userId = req.params.id;
    const updateduser = req.body;
  
    try {
      const user = await User.findByIdAndUpdate(userId, updateduser, { new: true });
  
      if (!user) {
        return res.status(404).json({ message: 'user not found' });
      }
  
      return res.status(200).json({ message: 'user updated successfully', user });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Server error' });
    }
  });
//all functions are working
=======
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
>>>>>>> origin/main

module.exports=router;