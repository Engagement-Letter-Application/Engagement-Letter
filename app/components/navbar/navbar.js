'use strict';

require('./_navbar.scss');

module.exports = {
  template: require('./navbar.html'),
  controller: ['$log', '$location', '$rootScope', '$window', 'authService', NavbarController],
  controllerAs: 'navbarCtrl',
  bindings: {
    appTitle: '@',
  },
};

function NavbarController($log, $location, $rootScope, $window, authService) {
  $log.debug('init navbarCtrl');

  function pageLoadHandler() {
    // if there is allready a token go the home page
    console.log('pageLoadHandler is running');
    let path = $location.path();

    if (path !== '/landing') {
      this.hideLogout = false;
      this.hideLogin = true;
    }

    if (path === '/landing' ) {
      this.hideLogout = true;
      this.hideLogin = false;
    }

    if (path === '/auth'){
      this.hideLogout = true;
      this.hideLogin = true;
    }


    authService.getToken()
      .then(() => {
        if(path === '/' || path === '/auth'){
          $location.url('/');
        }
        this.hideLogin = true;
        this.hideLogout = false;
      })
      .catch(() => {
        let query = $location.search();
        if (query.token) {
          return authService.setToken(query.token)
            .then(() => {
              $location.url('/profile');
              this.hideLogin = true;
              this.hideLogout = false;
            });
        }
        if (path !== '/auth' ){
          $location.url('/');
        }
      });
  }

  $window.onload = pageLoadHandler.bind(this);
  $rootScope.$on('$stateChangeStart', pageLoadHandler.bind(this));

  this.login = function() {
    this.hideLogout = true;
    this.hideLogin = true;

    $location.url('/auth');
  };

  this.logout = function() {
    $log.log('navbarCtrl.logout()');
    this.hideLogout = true;
    this.hideLogin = false;
    authService.logout()
      .then(() => {
        $location.url('/');
      });
  };
}
