const express = require('express');
const router = express.Router();
//const User = require('../models/user')
const { validateSignupRequest,validateSigninRequest, isRequestValidated}= require('../../validaters/auth')
const {signup,signin} = require('../../controller/admin/auth')

router.post('/admin/signup',validateSignupRequest,isRequestValidated,signup)
router.post('/admin/signin',validateSigninRequest,signin)

////router.post('/profile',requireSignin,(req,res)=>{
  //  res.status(200).json({user:"profile"})
//})
module.exports = router;