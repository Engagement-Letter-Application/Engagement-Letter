'use strict';

require('./_dashboard.scss');

module.exports = ['$log', '$q', '$http', DashboardController];

function DashboardController($log, $q, $http){
  $log.debug('init LoginController');

this.fetchDashboard = function() {
  dashboardService.fetchDashboard()
  .then((profile) => {
    this.profile = profile;
  })
  .catch((err) => {
    $log.error(err, err.message);
    return $q.reject(err);
  });
};
