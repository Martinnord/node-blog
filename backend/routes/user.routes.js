const router = require('express').Router()
const validate = require('express-validation')
const authenticate = require('../services/auth')
const localStrategy = require('../services/auth.services')
const passport = require('passport')
const passportConf = require('../passport')

const {
  signup,
  login,
  users,
  userValidate
} = require('../controllers/user.controller')

router.route('/signup', validate(userValidate.signup)).post(signup)

router
  .route('/login')
  .post(passport.authenticate('local', { session: false }), login)

module.exports = router
