'use strict';

module.exports = ['$stateProvider', '$urlRouterProvider', routerConfig];

function routerConfig($stateProvider, $urlRouterProvider){
  $urlRouterProvider.when('' , '');

  let states = [
    {
      name: 'landing',
      url: '/',
      template: require('../view/landing/landing.html'),
    },
    {
      name: 'dashboard',
      url: '/dashboard',
      template: require('../view/dashboard/dashboard.html'),
    },
  ];

  states.forEach(state => {
    $stateProvider.state(state);
  });
}
