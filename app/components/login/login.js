'use strict';

module.exports = {
  template: require('./login.html'),
  controller: ['$log', '$location', 'authService', SigninController],
  controllerAs: 'loginCtrl',
};

function SigninController($log, $location, authService) {
  $log.debug('init LoginCtrl');

  //need user email and password
  this.signin = function(){
    $log.debug('inti LoginCtrl.signin()');
    //authService
    authService.login(this.user)
    .then(() => {
      $location.path('/profile');
    })
    .catch(() => {
      this.errorMessage = true;
      console.log('failed to signin');
    });
  };
}
