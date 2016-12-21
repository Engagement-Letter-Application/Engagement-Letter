'use strict';

const mongoose = require('mongoose');
const Promise = require('bluebird');
const createError = require('http-errors');
const debug = require('debug')('EngagementLetter:dashboard');

const dashboardSchema = mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  phone: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  userID: {type: mongoose.Schema.Types.ObjectId, required: true},
});

const Dashboard = module.exports = mongoose.model('dashboard', dashboardSchema);
