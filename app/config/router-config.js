'use strict';

module.exports = ['$stateProvider', '$urlRouterProvider', routerConfig];

function routerConfig($stateProvider, $urlRouterProvider){
  $urlRouterProvider.when('' , '/');
  $urlRouterProvider.otherwise('/');

  let routes = [
    {
      name: 'landing',
      url: '/',
      template: require('../view/landing/landing.html'),
      controller: 'LandingController',
      controllerAs: 'landingCtrl',
    },
    {
      name: 'dashboard',
      url: '/dashboard',
      template: require('../view/dashboard/dashboard.html'),
    },
  ];

  routes.forEach(route => {
    $stateProvider.state(route);
  });
}
