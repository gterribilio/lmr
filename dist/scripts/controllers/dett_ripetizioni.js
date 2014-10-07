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
app
.controller('DettRipetizioniCtrl', [ '$scope', '$routeParams', '$location', 'services', function ($scope, $routeParams, $location, services) {
    $scope.id_ripetizione = $routeParams.id;

    services.getFromRESTServer("id_ripe="+$scope.id_ripetizione,"dettaglio_ripetizione").success(function (response) {

        $scope.ripetizione=response[0]; //è un array di oggetti JSON per cui devo ritornarne solo il primo
        //alert(JSON.stringify($scope.ripetizione));
    });

    $scope.prenotaRipetizione = function() {

        var conf = confirm("Vuoi davvero prenotare questa ripetizione?");

        if(conf == true) {
            //viene lanciato quando faccio submit di prenota ripetizione
            //forzo come utente per prenotare la ripetizione l'utente con id=2
            services.getFromRESTServer("id_rip="+$scope.id_ripetizione+"&my_id=2","prenotazione").
            success(function (data) {
                alert("Prenotazione effettuata correttamente!");
                $location.path("/");
            });
        }
    }
}]);
