(function() {
  'use strict';

  angular
    .module('myApp')
    .factory("DataService", DataService);

  /** @ngInject */
  function DataService($resource) {

    /**
     * REST calls
     */
    return {
      query: function(url) {

        try {

        return $resource(url, {}, {
          query: {
            method: "GET",
            isArray: true
          },
          create: {
            method: "POST"
          },
          get: {
            method: "GET",
            isArray: true
          },
          remove: {
            method: "DELETE"
          },
          update: {
            method: "PUT"
          }
        });

        } catch (e) {
          $exceptionHandler(e);
        }
      }
    }

  }
})();
