(function() {
  'use strict';

  angular
    .module('workshop')
    .controller('workshopController', WorkshopController);

  WorkshopController.$inject = ['$interpolate', 'attendeesFactory', 'attendeesService'];

  function WorkshopController($interpolate, attendeesFactory, attendeesService) {
    // this -> Zugriff auf den Scope
    this.test = 'Hallo Welt';
    this.name = 'Gregor';
    this.attendees = attendeesFactory.getAll();
    this.firstAttendee = attendeesService.getFirst();
    
    this.expression = $interpolate('{{ name | uppercase }}');
    this.uppercasedName = this.expression({ name: this.name });
  }
}());
