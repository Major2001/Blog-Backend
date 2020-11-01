const express = require('express');
const morgan = require('morgan');
const blogRouter = require('./routes/blogRouter');
const userRouter = require('./routes/userRouter');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use('/api/blogs', blogRouter);
app.use('/api/users', userRouter);
app.all('*', (req, res, next) => {
  console.log(req.originalUrl);
  next(new Error('Not Found'));
});
app.use((err, req, res, next) => {
  console.log('err detected', err.message);
  res.status(500).json({
    status: 'error',
    message: err.message,
  });
});
module.exports = app;
