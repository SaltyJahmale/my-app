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
        controller: 'chartBarController',
        controllerAs: 'vm'
      })
       .when('/contact', {
        templateUrl: 'app/components/contact/contact.html',
         controller: 'mqttProvider',
         controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: 'app/components/error/error.html'
      });
  }

})();
