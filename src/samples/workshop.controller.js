(function() {
  'use strict';

  angular
    .module('workshop')
    .controller('workshopController', WorkshopController);

  WorkshopController.$inject = ['$scope'];

  function WorkshopController($scope) {
    // this -> Zugriff auf den Scope
    this.test = 'Hallo Welt';
    this.attendees = ['Jana', 'Marc', 'Matthias', 'Linda'];
  }
}());
