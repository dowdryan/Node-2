/** Application for bank.ly */

const express = require('express');
const app = express();
const ExpressError = require("./helpers/expressError");
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/users', userRoutes);


/** 404 handler */
app.use(function(req, res, next) {
  const err = new ExpressError("Not Found", 404);
  return next(err); // pass the error to the next piece of middleware
});

/** general error handler */
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  return res.json({
    status: err.status,
    message: err.message
  });
});


module.exports = app;