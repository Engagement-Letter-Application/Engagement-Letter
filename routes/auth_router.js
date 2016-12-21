'use strict';

const Router = require('express').Router;
const createError = require('http-errors');
const jsonParser = require('body-parser').json();
// const googleOAUTH = require('../lib/google-oauth-middleware.js');
const debug = require('debug')('EngagementLetter:auth-router');
const basicAuth = require('../lib/basic_auth_middleware.js');
const errorMiddleware = require('../lib/error-middleware.js');

const User = require('../models/user.js');

const authRouter = module.exports = Router();

authRouter.post('/signup', errorMiddleware, jsonParser, function(req, res, next){
  debug('POST /signup');

  let password = req.body.password;
  delete req.body.password;

  let user = new User(req.body);

  user.generatePasswordHash(password)
  .then(user => user.save())
  .then(user => user.generateToken())
  .then(token => res.send(token))
  .then(console.log('Hello World'))
  .catch(next);
});

authRouter.get('/api/login', basicAuth, function(req, res, next){
  debug('GET /api/login');
  User.findOne({email: req.auth.email})
  .catch(err => Promise.reject(createError(401, err.message)))
  .then(user => user.comparePasswordHash(req.auth.password))
  .catch(err => Promise.reject(createError(401, err.message)))
  .then(user => user.generateToken())
  .then(token => res.send(token))
  .catch(next);
});
