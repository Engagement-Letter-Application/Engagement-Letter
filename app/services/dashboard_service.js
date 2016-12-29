'use strict';

module.exports = ['$q', '$log', '$http', 'authService', dashboardService];

function dashboardService($q, $log, $http , authService) {
  $log.debug('init dashboard Service');

  let service = {};
  service.dashboard;

  service.createDashboard = function(dashboard) {
    $log.debug('dashboardService.createDashboard()');

    return authService.getToken()
    .then( token => {
      let url = `${__API_URL__}/api/dashboard`;
      let config = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      return $http.post(url, dashboard, config);
    })
    .then(res => {
      $log.log('successful create dashboard');
      service.dashboard = res.data;
      return res.data;
    })
    .catch( err => {
      $log.error(err.message);
      return $q.reject(err);
    });
  };

  service.fetchDashboard = function() {
    $log.debug('dashboardService.fetchDashboard()');

    return authService.getToken()
    .then( token => {
      let url = `${__API_URL__}/api/dashboard`;
      let config = {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      return $http.get(url, config);
    })
    .then(res => {
      $log.log('successful fetch user dashboard');
      service.dashboard = res.data;
      return service.dashboard;
    })
    .catch(err => {
      $log.error(err.message);
      return $q.reject(err);
    });
  };

  service.updateDashboard = function(dashboardID, dashboardData) {
    $log.debug('dashboardService.fetchDashboard()');

    return authService.getToken()
    .then( token => {
      let url = `${__API_URL__}/api/dashboard/${dashboardID}`;
      let config = {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      return $http.put(url, dashboardData, config);
    })
     .then( res => {
       let dashboard = res.data;
       $log.log('successful update user dashboard');
       return dashboard;
     })
    .catch(err => {
      $log.error(err.message);
      return $q.reject(err);
    });
  };

  return service;
}
