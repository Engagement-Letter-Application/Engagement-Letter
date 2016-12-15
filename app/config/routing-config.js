'use strict';

module.exports = ['$stateProvider', '$urlRouterProvider', routerConfig];

function routerConfig($stateProvider, $urlRouterProvider){
  $urlRouterProvider.when('' , '/landing');
  $urlRouterProvider.when('/' , '/landing');

  let states = [
    {
      name: 'landing',
      url: '/home',
      template: require('../view/landing/landing.html'),
    },
    // {
    //   name: 'login',
    //   url: '/login',
    //   controllerAs: 'loginCtrl',
    //   controller: 'LoginController',
    //   template: require('../view/login/login.html'),
    // },
    // {
    //   name: 'profile',
    //   url: '/profile',
    //   controllerAs: 'profileCtrl',
    //   controller: 'ProfileController',
    //   template: require('../view/profile/profile.html'),
    // },
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
