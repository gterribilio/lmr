'use strict';

/**
 * @ngdoc function
 * @name lemieripetizioniApp.controller: RicercaRipetizioniCtrl
 * @description
 * # RicercaRipetizioniCtrl
 * Controller of the lemieripetizioniApp
 */

 var ricerca = angular.module('RicercaRipetizioniCtrlModule', []);

 ricerca.controller('RicercaRipetizioniCtrl', ['$scope', '$rootScope', '$window', 'services', 'localStorageService', '$location', '$anchorScroll',
  function ($scope, $rootScope, $window, services, localStorageService, $location, $anchorScroll) {

    $scope.ripetizioni = {};
    $scope.my_materia = null;
    $scope.username = null;
    $scope.password = null;

    $scope.datada = null;
    $scope.dataa=null;
    $scope.orada=null;
    $scope.oraa=null;

    /*recupero questi dati dallo storage in modo da visualizzare correttamente il menù anche se faccio refresh della pagina*/
    $rootScope.isLogged = localStorageService.get("isLogged");
    $scope.userData = localStorageService.get("userData");

    //tiro su la codetable delle materie
    services.getCodeTable("codetable=MATERIA").success(function (data){
        //alert(JSON.stringify(data));
        $scope.materie=data;
        //aggiungo un dummy all'inizio della lista in modo tale da permettere di non selezionare niente per questo campo
        $scope.materie[0]=null;
    });

    /*DICHIARAZIONE DELLE FUNZIONI*/

    $scope.doRicerca = function() {
        //alert($rootScope.userData.ID_ORDINE_SCUOLA+" " + $rootScope.userData.CITTA +" " + $scope.datada + " " + $scope.dataa + " " + $scope.orada
        //+ " " + $scope.oraa);
var temp_materia = ($scope.my_materia===null) ? null : $scope.my_materia.ID_MATERIA;
services.getFromRESTServer("ord_scuola=" + $scope.userData.ID_ORDINE_SCUOLA + "&citta_filtro=" + $scope.userData.CITTA +
    "&datada=" + $scope.datada + "&dataa=" + $scope.dataa + "&orada=" + $scope.orada + "&oraa=" + $scope.oraa + "&materia="+temp_materia,"ricerca_custom").
success(function (data) {
    $scope.ripetizioni=data;
    $scope.msg=data.errMsg;
});
    } //end doRicerca

    //cancella il form
    $scope.doReset = function() {
        $scope.datada=null;
        $scope.dataa=null;
        $scope.orada=null;
        $scope.oraa=null;
        $scope.my_materia=null;
    };

    $rootScope.gotoHome = function() {
       $location.path("/home");
   };

}]);