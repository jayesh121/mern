  const express = require('express');
  const router = express.Router();
//const {} = require()
//const User = require('../models/user')
 const { validateSignupRequest,validateSigninRequest, isRequestValidated}= require('../validaters/auth')
 const {signup,signin} = require('../controller/admin/auth')


  router.post('/signup',validateSignupRequest,isRequestValidated,signup)
  router.post('/signin',validateSigninRequest,isRequestValidated,signin)

  //router.post('/profile',requireSignin,(req,res)=>{
  //  res.status(200).json({user:"profile"})
 // })
  module.exports = router;