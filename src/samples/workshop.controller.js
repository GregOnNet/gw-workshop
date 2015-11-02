(function() {
  'use strict';

  angular
    .module('workshop')
    .controller('workshopController', WorkshopController);

  WorkshopController.$inject = ['$interpolate'];

  function WorkshopController($interpolate) {
    // this -> Zugriff auf den Scope
    this.test = 'Hallo Welt';
    this.name = 'Gregor';

    this.expression = $interpolate('{{ name | uppercase }}');
    this.uppercasedName = this.expression({ name: this.name });

    this.attendees = ['Jana', 'Marc', 'Matthias', 'Linda'];
  }
}());
