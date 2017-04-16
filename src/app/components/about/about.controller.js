(function() {
  'use strict';

  angular
    .module('myApp')
    .controller('chartBarController', chartBarController);

  /** @ngInject */
  function chartBarController() {
    var vm = this;

    vm.myData = [10, 20, 30, 40, 50];

    vm.hello = "World!";
  }
})();
