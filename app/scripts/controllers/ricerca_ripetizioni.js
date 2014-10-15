'use strict';

/**
 * @ngdoc function
 * @name lemieripetizioniApp.controller: RicercaRipetizioniCtrl
 * @description
 * # RicercaRipetizioniCtrl
 * Controller of the lemieripetizioniApp
 */

 var ricerca = angular.module('RicercaRipetizioniCtrlModule', []);

 ricerca.controller('RicercaRipetizioniCtrl', ['$scope', '$rootScope', '$window', 'services', function ($scope, $rootScope, $window, services) {

    /*Usare i persistent cookie*/

    /*TODO capire dove mettere queste variabili della rootscope. Se messe in app.js ci sono problemi nella minificazione*/

    $scope.ripetizioni = {};
    $scope.username = null;
    $scope.password = null;

    $scope.datada = null;
    $scope.dataa=null;
    $scope.orada=null;
    $scope.oraa=null;

    $scope.doRicerca = function() {

        //alert($rootScope.userData.ID_ORDINE_SCUOLA+" " + $rootScope.userData.CITTA +" " + $scope.datada + " " + $scope.dataa + " " + $scope.orada
        //+ " " + $scope.oraa);
 services.getFromRESTServer("ord_scuola=" + $rootScope.userData.ID_ORDINE_SCUOLA + "&citta_filtro=" + $rootScope.userData.CITTA +
    "&datada=" + $scope.datada + "&dataa=" + $scope.dataa + "&orada=" + $scope.orada + "&oraa=" + $scope.oraa,"ricerca_custom").
 success(function (data) {
    $scope.ripetizioni=data;
    $scope.msg=data.errMsg;
});
    } //end doRicerca

    //devo usare rootscope siccome è esterno al controller RicercaRipetizioniCtrl
    $rootScope.doLeMieRipetizioni = function() {
        services.getFromRESTServer("id_utente=2","ricerca_ripetizioni_prenotate").
        success(function (data) {
            $scope.ripetizioniPrenotate=data;
            $scope.msg=data.errMsg;
        });
    } //end doLeMieRipetizioni

    //cancella il form
    $scope.doReset = function() {
        $scope.datada=null;
        $scope.dataa=null;
        $scope.orada=null;
        $scope.oraa=null;
    };
}]);