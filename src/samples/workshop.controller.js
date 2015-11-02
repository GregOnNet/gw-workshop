(function() {
  'use strict';

  angular
    .module('workshop')
    .controller('workshopController', WorkshopController);

  function WorkshopController() {
    // this -> Zugriff auf den Scope
    this.test = 'Hallo Welt';
    this.attendees = ['Jana', 'Marc', 'Matthias', 'Linda'];
  }
}());
