(function() {
  'use strict';

  angular
    .module('myApp')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })
      .when('/about', {
        templateUrl: 'app/components/about/about.html',
        controller: 'ChartBarController',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: 'app/components/error/error.html'
      });
  }

})();
