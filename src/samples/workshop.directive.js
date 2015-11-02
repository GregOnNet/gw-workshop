(function() {
  'use strict';

  angular
    .module('workshop')
    //         <ws-directive></ws-directive>
    //         <ws:directive></ws:directive>
    .directive('wsDirective', wsDirective);

  function wsDirective() {
    return {
      templateUrl: './samples/workshop.directive.tpl.html',
      transclude: true,
      scope: {
        greeting: '@',
        name: '=',
        greet: '&shout'
      }
    };
  }
}());
