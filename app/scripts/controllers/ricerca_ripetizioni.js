'use strict';

/**
 * @ngdoc function
 * @name lemieripetizioniApp.controller: RicercaRipetizioniCtrl
 * @description
 * # RicercaRipetizioniCtrl
 * Controller of the lemieripetizioniApp
 */

 var ricerca = angular.module('RicercaRipetizioniCtrlModule', []);

 ricerca.controller('RicercaRipetizioniCtrl', ['$scope', '$rootScope', '$window', 'services', 'localStorageService', '$location',
  function ($scope, $rootScope, $window, services, localStorageService, $location) {

    $scope.ripetizioni = {};
    $scope.username = null;
    $scope.password = null;

    $scope.datada = null;
    $scope.dataa=null;
    $scope.orada=null;
    $scope.oraa=null;

    /*recupero questi dati dallo storage in modo da visualizzare correttamente il menù anche se faccio refresh della pagina*/
    $rootScope.isLogged = localStorageService.get("isLogged");
    $scope.userData = localStorageService.get("userData");

    $scope.doRicerca = function() {

        //alert($rootScope.userData.ID_ORDINE_SCUOLA+" " + $rootScope.userData.CITTA +" " + $scope.datada + " " + $scope.dataa + " " + $scope.orada
        //+ " " + $scope.oraa);
services.getFromRESTServer("ord_scuola=" + $scope.userData.ID_ORDINE_SCUOLA + "&citta_filtro=" + $scope.userData.CITTA +
    "&datada=" + $scope.datada + "&dataa=" + $scope.dataa + "&orada=" + $scope.orada + "&oraa=" + $scope.oraa,"ricerca_custom").
success(function (data) {
    $scope.ripetizioni=data;
    $scope.msg=data.errMsg;
});
    } //end doRicerca

    //devo usare rootscope siccome è esterno al controller RicercaRipetizioniCtrl
    $rootScope.doLeMieRipetizioni = function() {
        services.getFromRESTServer("id_utente=" + $scope.userData.ID_UTENTE,"ricerca_ripetizioni_prenotate").
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

    $rootScope.doLogout = function() {
        localStorageService.clearAll();
        $location.path("/");
        $rootScope.isLogged = false;
    };
}]);