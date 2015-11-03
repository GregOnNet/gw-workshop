(function() {
  'use strict';

  angular
    .module('workshop')
    .service('asyncService', asyncService);

  asyncService.$inject = ['$q', '$timeout'];
  function asyncService($q, $timeout) {

    this.doAsync = doAsync;

    function doAsync(schouldResolve) {

      var defer = $q.defer();

      $timeout(function () {
          // Asnychronen Scope
          if(schouldResolve)
            defer.resolve('Succesfully resolved');
          else
            defer.reject('There was a problem precceding your request');
      }, 5000);

      return defer.promise;
    }
  }
}());
