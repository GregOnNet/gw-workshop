(function() {
  'use strict';

  angular
    .module('workshop')
    .directive('wsControllerDirective', wsControllerDirective);

  function wsControllerDirective() {

    return {
      scope: {
        date: '='
      },
      templateUrl: './samples/workshop.controller.directive.tpl.html',
      controller: DirectiveController,
      controllerAs: 'controller',
      bindToController: true
    };
  }

  function DirectiveController() {
    var vm = this;
  }

}());
