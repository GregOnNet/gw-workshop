(function() {
  'use strict';

  angular
    .module('workshop')
    .controller('workshopController', WorkshopController);

  WorkshopController.$inject = ['$interpolate', 'attendeesFactory', 'attendeesService'];

  function WorkshopController($interpolate, attendeesFactory, attendeesService) {
    var vm = this;
    // this -> Zugriff auf den Scope
    vm.test = 'Hallo Welt';
    vm.name = 'Gregor';
    vm.attendees = attendeesFactory.getAll();
    vm.firstAttendee = attendeesService.getFirst();

    vm.expression = $interpolate('{{ name | uppercase }}');
    vm.uppercasedName = vm.expression({ name: vm.name });

    vm.greet = greet;

    function greet() {
        alert(vm.test + ' ' + vm.name)
    }
  }
}());
