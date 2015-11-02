(function() {
  'use strict';

  angular
    .module('workshop')
    .factory('attendeesFactory', attendeesFactory);

  function attendeesFactory() {
    return {
      getAll: getAll
    };

    function getAll() {
      return ['Jana', 'Marc', 'Matthias', 'Linda'];
    }
  }
}());
