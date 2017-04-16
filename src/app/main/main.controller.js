(function() {
  'use strict';

  angular
    .module('myApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;

    vm.world = "Hello";
  }
})();
