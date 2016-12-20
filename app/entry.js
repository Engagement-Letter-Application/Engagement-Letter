'use strict';

const angular = require('angular');
const engagementApp = angular.module('engagementApp', [require('angular-route')]);

require('./components')(engagementApp);
require('./view')(engagementApp);
require('./services')(engagementApp);

engagementApp.config(['$routeProvider', function($routing) {
  $routing

    .when('/', {
      templateUrl: '/views/landing/landing.html',
      controller: 'LandingController',
      controllerAs: 'landingCtrl'
    })
    .when('/dashboard', {
      templateUrl: '/views/dashboard.html',
      controller: 'DashboardController',
      controllerAs: 'dashCtrl'
    })
    .when('/auth', {
      templateUrl: '/views/auth/auth.html',
      controller: 'AuthController',
      controllerAs: 'authCtrl'
    .otherwise({
      redirectTo: '/'
    });
}]);
