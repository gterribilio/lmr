'use strict';

/**
 * @ngdoc function
 * @name lemieripetizioniApp.controller:DettripetizioniCtrl
 * @description
 * # DettripetizioniCtrl
 * Controller of the lemieripetizioniApp
 */

/* When defining a module with no module dependencies, the array of dependencies should be defined and empty.Non ci deve essere proprio!
Lo indico solo in app.js */

var dett = angular.module('DettPrenotazioneCtrlModule', []);

dett.controller('DettPrenotazioneCtrl', [ '$scope','$rootScope', '$routeParams', '$location', 'services', 'localStorageService', function ($scope, $rootScope, $routeParams, $location, services, localStorageService) {

    $rootScope.showRicercaRipetizioni=false;
    $rootScope.showLeMieRipetizioni=false;

    $scope.id_ripetizione = $routeParams.id;

    services.getFromRESTServer("id_ripe="+$scope.id_ripetizione,"dettaglio_ripetizione").success(function (response) {

        $scope.ripetizione=response[0]; //è un array di oggetti JSON per cui devo ritornarne solo il primo
        //alert(JSON.stringify($scope.ripetizione));
    });

    $scope.annullaRipetizione = function() {

        var conf = confirm("Vuoi davvero annullare questa ripetizione?");

        if(conf == true) {

            var motivo = prompt("Inserisci il motivo per cui intendi annullare:", "");

            if (motivo != null) {
                services.getFromRESTServer("id_ripe="+$scope.id_ripetizione+"&motivo="+motivo,"annulla_ripetizione").
                success(function (data) {
                    alert("Prenotazione annullata con successo!");
                    $location.path("/");
                });
            }          
        }
    }
}]);