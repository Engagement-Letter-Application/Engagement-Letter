'use strict';

module.exports = ['$stateProvider', '$urlRouterProvider', routerConfig];

function routerConfig($stateProvider, $urlRouterProvider){
  $urlRouterProvider.when('' , '/');
  // $urlRouterProvider.otherwise('/');

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
    {
      name: 'contact',
      url: '/contact',
      template: require('../view/contact/contact.html'),
    },
    {
      name: 'about',
      url: '/about',
      template: require('../view/about/about.html'),
    },
    {
      name: 'signin',
      url: '/auth',
      template: require('../view/auth/auth.html'),
      controller: 'LoginController',
      controllerAs: 'loginCtrl',
    },
  ];

  routes.forEach(route => {
    $stateProvider.state(route);
  });
}
