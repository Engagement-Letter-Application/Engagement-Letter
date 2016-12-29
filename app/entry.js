'use strict';

// build sass
// require('./scss/main.scss');

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

const engagementApp = angular.module('engagementApp', [require('angular-route')]);

// require('./components')(engagementApp);
// require('./view')(engagementApp);
// require('./services')(engagementApp);

engagementApp.config(['$routeProvider', function($routing) {
  $routing

    .when('/', {
      templateUrl: 'view/landing/landing.html',
      controller: 'LandingController',
    })
    .when('/dashboard', {
      templateUrl: 'view/dashboard.html',
      controller: 'DashboardController',
      controllerAs: 'dashCtrl',
    })
    .when('/auth', {
      templateUrl: 'view/auth/auth.html',
      controller: 'AuthController',
      controllerAs: 'authCtrl',
    })
    .otherwise({
      redirectTo: '/',
    });
}]);

// create angular module
const app = angular.module(camelcase(__TITLE__), [ngTouch, ngAnimate, uiRouter, uiBootstrap, ngFileUpload]);

// set up $rootScope globals
app.run(['$rootScope', function($rootScope){
  $rootScope.title = __TITLE__;
}]);
