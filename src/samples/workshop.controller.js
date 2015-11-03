(function() {
  'use strict';

  angular
    .module('workshop')
    .controller('workshopController', WorkshopController);

  WorkshopController.$inject = ['$interpolate', '$scope' , 'attendeesFactory', 'attendeesService'];

  function WorkshopController($interpolate, $scope, attendeesFactory, attendeesService) {
    var vm = this;
    // this -> Zugriff auf den Scope
    vm.test = 'Hallo Welt';
    vm.attendees = attendeesFactory.getAll();
    vm.firstAttendee = attendeesService.getFirst();

    vm.date = new Date();



    vm.name = 'Gregor';
    vm.expression = $interpolate('{{ name | uppercase }}');

    $scope.$watch(
      // Watch Function
      function() { return vm.name; },
      // Listener Function
      function(newValue) {
        vm.uppercasedName = vm.expression({ name: newValue});
      }
    );


    vm.greet = greet;

    function greet() {
        alert(vm.test + ' ' + vm.name);
    }
  }
}());
