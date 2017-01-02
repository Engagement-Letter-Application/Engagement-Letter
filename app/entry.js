'use strict';

// build sass
require('./scss/main.scss');

// require node modules
const path = require('path');

// require npm modules
const angular = require('angular');
const camelcase = require('camelcase');
const pascalcase = require('pascalcase');

// require angualr modules
const ngTouch = require('angular-touch');
const ngAnimate = require('angular-animate');
const uiRouter = require('angular-ui-router');
const ngFileUpload = require('ng-file-upload');

// create angular module
const app = angular.module(camelcase(__TITLE__), [ngTouch, ngAnimate, uiRouter, ngFileUpload]);

// set up $rootScope globals
app.run(['$rootScope', function($rootScope){
  $rootScope.title = __TITLE__;
}]);

// load configuration
let context = require.context('./config/', true, /.js$/);
context.keys().forEach( key => {
  app.config(context(key));
});

// load services
context = require.context('./services/', true, /.js$/);
context.keys().forEach( key => {
  let name = camelcase(path.basename(key, '.js'));
  let module = context(key);
  app.service(name, module);
});

// load view controllers
context = require.context('./view/', true, /.js$/);
context.keys().forEach( key => {
  let name = pascalcase(path.basename(key, '.js'));
  let module = context(key);
  app.controller(name, module);
});

// load components
context = require.context('./components/', true, /.js$/);
context.keys().forEach( key => {
  let name = camelcase(path.basename(key, '.js'));
  let module = context(key);
  app.component(name, module);
});

angular.bootstrap(document, [camelcase(__TITLE__)]);
