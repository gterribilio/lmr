'use strict';

/**
 * @ngdoc function
 * @name lemieripetizioniApp.controller: RicercaRipetizioniCtrl
 * @description
 * # RicercaRipetizioniCtrl
 * Controller of the lemieripetizioniApp
 */

 var il_mio_profilo = angular.module('IlMioProfiloCtrlModule', []);

 il_mio_profilo.controller('IlMioProfiloCtrl', ['$scope', '$rootScope', '$window', 'services', 'localStorageService', '$location', '$anchorScroll',
  function ($scope, $rootScope, $window, services, localStorageService, $location, $anchorScroll) {

    $rootScope.isLogged = localStorageService.get("isLogged");
    $scope.userData = localStorageService.get("userData");

}]);