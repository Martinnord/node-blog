const router = require('express').Router()
const validate = require('express-validation')
const { signup, userValidate } = require('../controllers/user.controller')

router.route('/signup', validate(userValidate.signup)).post(signup).get(signup)

// router.route('/user/:username').get(getUserByUsername)

module.exports = router
