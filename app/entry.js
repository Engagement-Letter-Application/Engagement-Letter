'use strict';

module.exports = ['$stateProvider', '$urlRouterProvider', routerConfig];

function routerConfig($stateProvider, $urlRouterProvider){
  $urlRouterProvider.when('' , '/landing');
  $urlRouterProvider.when('/' , '/landing');

  let routes = [
    {
      name: 'landing',
      url: '/home',
      template: require('../view/landing/landing.html'),
    },
    {
      name: 'signup',
      url: '/signup',
      template: require('../view/signup/singup.html'),
    },
    {
      name: 'login',
      url: '/login',
      controllerAs: 'loginCtrl',
      controller: 'LoginController',
      template: require('../component/login/login.html'),
    },
    {
      name: 'dashboard',
      url: '/dashboard',
      controllerAs: 'dashboardCtrl',
      controller: 'DashboardController',
      template: require('../dashboard/dashboard.html'),
    },
    {
      name: 'about',
      url: '/about',
      template: require('../view/about/about.html'),
    },
    {
      name: 'contact',
      url: '/contact',
      template: require('../view/contact/contact.html'),
    },
  ];

  states.forEach(state => {
    $stateProvider.state(state);
  });
}
