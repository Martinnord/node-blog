const User = require('../models/user.model')
const Joi = require('joi')
const router = require('express').Router()

const userValidate = {
  signup: {
    username: Joi.string().required(),
    name: Joi.string().required(),
    password: Joi.string().required()
  }
}

const signup = async (req, res) => {
  try {
    const user = await User.create(req.body)

    res.status(201).json(user)
  } catch (err) {
    console.log('ERROR', err)
    res.status(500).json(err)
  }
}

module.exports = { signup, userValidate }
