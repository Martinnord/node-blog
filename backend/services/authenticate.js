const passport = require('passport')
const LocalStrategy = require('passport-local')
const jwt = require('jsonwebtoken')
const constants = require('../config/main')

const User = require('../models/user.model')

User.findOne({
  username: req.body.username
} function(err, user) {

  if (err) throw err

  if(!user) {
    res.json({success: false, message: "LOL, din sopa"})
  } else if (user) {
    if (user.password != req.body.password) {
      res.json({success: false, message: "fel lösen"})
    } else {
      let token = jwt.sign(user, constants.JWT_SECRET)
      console.log('token', token);

      res.json({
        success: true,
        message: "welcome",
        token
      })
    }
  }

})
