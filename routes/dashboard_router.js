'use strict';

// npm
const Router = require('express').Router;
const createError = require('http-errors');
const jsonParser = require('body-parser').json();
const debug = require('debug')('EngagementLetter:dashboard-route');

// app
const Profile = require('../model/dashboard.js');
const bearerAuth = require('../lib/bearer-auth-middleware.js');

// constants
const profileRouter = module.exports = Router();

profileRouter.post('/api/dashboard', bearerAuth, jsonParser, function(req, res, next) {
  debug('POST /api/dashboard');
  req.body.userID = req.user._id;
  new Profile(req.body).save()
  .then(dashboard => res.json(dashboard))
  .catch(err => {
    if (err.message === 'dashboard validation failed') return next(createError(400, err.message));
    next(err);
  });
});

profileRouter.get('/api/dashboard/:id', bearerAuth, function(req, res, next) {
  debug('GET /api/dashboard/:id');
  Profile.findById(req.params.id)
  .then(dashboard => {
    if (dashboard.userID.toString() !== req.user._id.toString())
      return next(createError(401, 'invalid userid'));
    res.json(dashboard);
  })
  .catch(err => next(createError(404, err.message)));
});

profileRouter.put('/api/dashboard/:id', bearerAuth, jsonParser, function(req, res, next){
  debug('PUT /api/dashboard');

  Profile.findById(req.params.id)
  .then( dashboard => {
    if(dashboard.userID.toString() !== req.user._id.toString())
      return Promise.reject(createError(401, 'invalid userid'));
    return Profile.findByIdAndUpdate( dashboard._id, req.body, { new:true});
  })
  .then(dashboard => res.json(dashboard))
  .catch(err => {
    if(err.name === 'validationError') return next(err);
    if(err.status) return next(err);
    next(createError(404, 'not found'));
  });
});

profileRouter.get('/api/dashboard', bearerAuth, function(req, res, next){
  debug('GET /api/dashboard');

  Profile.findOne({
    userID: req.user._id.toString(),
  })
  .then((dashboard) => {
    if (!dashboard) return next(createError(404, 'dashboard not found'));
    res.json(dashboard);
  })
  .catch(next);
});
