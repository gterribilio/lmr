'use strict';

/**
 * @ngdoc function
 * @name lemieripetizioniApp.controller: RicercaRipetizioniCtrl
 * @description
 * # RicercaRipetizioniCtrl
 * Controller of the lemieripetizioniApp
 */

 var ricerca = angular.module('LeMieRipetizioniCtrlModule', []);

 ricerca.controller('LeMieRipetizioniCtrl', ['$scope', '$rootScope', '$window', 'services', 'localStorageService', '$location', '$anchorScroll',
  function ($scope, $rootScope, $window, services, localStorageService, $location, $anchorScroll) {

    $scope.ripetizioniPrenotate = {};

    $rootScope.isLogged = localStorageService.get("isLogged");
    $scope.userData = localStorageService.get("userData");

    /*DICHIARAZIONE DELLE FUNZIONI*/

    $scope.doLeMieRipetizioni = function() {
        services.getFromRESTServer("id_utente=" + $scope.userData.ID_UTENTE,"ricerca_ripetizioni_prenotate").
        success(function (data) {
            $scope.ripetizioniPrenotate=data;
            $scope.msg=data.errMsg;
        });
        } //end doLeMieRipetizioni

        $scope.doLeMieRipetizioni();
    }]);