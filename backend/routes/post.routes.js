const router = require('express').Router()
const app = require('express')
const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
} = require('../controllers/PostController')

// const authenticate = require('../controllers/auth.controller')

router
  .route('/')
  .get(getAllPosts)
  .post(createPost) // authenticate here later

router
  .route('/:id')
  .put(updatePost)
  .get(getPostById)
  .delete(deletePost) //authenticate here later

module.exports = router
