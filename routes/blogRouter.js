const express = require('express');
const blogController = require('../controllers/blogController');
const authController = require('../controllers/authController');

const router = express.Router();
router
  .route('/:id')
  .get(authController.protect, blogController.getBlog)
  .patch(authController.protect, blogController.updateBlog);
router
  .route('/')
  .get(authController.protect, blogController.getAllBlogs)
  .post(authController.protect, blogController.addBlog);

module.exports = router;
