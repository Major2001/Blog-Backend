const User = require('../models/userModel');
const { Blog } = require('../models/blogModel');
const catchAsync = require('../utils/catchAsync');

module.exports = {
  getAllBlogs: catchAsync(async (req, res, next) => {
    const blogs = await Blog.find();
    res.status(200).json({
      status: 'success',
      data: {
        blogs,
      },
    });
  }),
  addBlog: catchAsync(async (req, res, next) => {
    const newBlog = await Blog.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        newBlog,
      },
    });
  }),
  getBlog: catchAsync(async (req, res, next) => {
    const blog = await Blog.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        blog,
      },
    });
  }),
  updateBlog: catchAsync(async (req, res, next) => {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: { updatedBlog },
    });
  }),
};
