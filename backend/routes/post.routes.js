const router = require('express').Router()
const app = require('express')
const passport = require('passport')
const UsersController = require('../controllers/user.controller')
const passportConf = require('../passport')

const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
} = require('../controllers/PostController')

router.route('/').get(getAllPosts)

router
  .route('/secret')
  .get(passport.authenticate('jwt', { session: false }), UsersController.secret)

router.route('/createpost').post(createPost)

router
  .route('/:id')
  .put(updatePost)
  .get(getPostById)
  .delete(deletePost) //authenticate here later

module.exports = router
