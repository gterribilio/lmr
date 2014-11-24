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

var dett = angular.module('DettRipetizioniCtrlModule', []);

dett.controller('DettRipetizioniCtrl', [ '$scope','$rootScope', '$routeParams', '$location', 'services','localStorageService' , function ($scope, $rootScope, $routeParams, $location, services, localStorageService) {

    $rootScope.showRicercaRipetizioni=false;
    $rootScope.showLeMieRipetizioni=false;

    $scope.id_ripetizione = $routeParams.id;
        $scope.userData = localStorageService.get("userData");

    services.getFromRESTServer("id_ripe="+$scope.id_ripetizione,"dettaglio_ripetizione").success(function (response) {

        $scope.ripetizione=response[0]; //è un array di oggetti JSON per cui devo ritornarne solo il primo
        //alert(JSON.stringify($scope.ripetizione));
    });

    $scope.prenotaRipetizione = function() {

        var conf = confirm("Vuoi davvero prenotare questa ripetizione?");

        if(conf == true) {
            //viene lanciato quando faccio submit di prenota ripetizione
            //forzo come utente per prenotare la ripetizione l'utente con id=2
            services.getFromRESTServer("id_rip="+$scope.id_ripetizione+"&my_id="+$scope.userData.ID_UTENTE,"prenotazione").
            success(function (data) {
                alert("Prenotazione effettuata correttamente!");
                $location.path("/home");
            });
        }
    }
}]);