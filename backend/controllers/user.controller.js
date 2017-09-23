const User = require('../models/user.model')
const Joi = require('joi')
const router = require('express').Router()
const _ = require('lodash')
const jwt = require('jsonwebtoken')
const constants = require('../config/main')

const userValidate = {
  signup: {
    username: Joi.string().required(),
    name: Joi.string().required(),
    password: Joi.string().required()
  }
}

signToken = user => {
  return jwt.sign(
    {
      iss: 'node-blog',
      sub: user.id,
      iat: new Date().getTime()
    },
    `${constants.JWT_SECRET}`
  )
}

const signup = async (req, res) => {
  try {
    // Creates a new user
    const newUser = await User.create(req.body)
    res
      .status(201)
      .header('DONE', newUser.accessToken)
      .send({
        success: true,
        message: 'New user created',
        newUser: newUser
      })

    // Generate the token
    const token = signToken(newUser)
    console.log('token', token)

    // Respond with a token
    res.status(200).json({ token })
  } catch (err) {
    console.log('ERROR', err)
    res.status(500).json(err)
  }
}

const login = async (req, res, next) => {
  try {
    res.status(200).json(req.user)
    return next()
  } catch (err) {
    res.status(500).json(err)
  }
}

const secret = async (req, res, next) => {
  console.log('Heloooooo')
}

module.exports = { signup, login, userValidate, secret }
