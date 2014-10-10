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

    $rootScope.userData = {};

    /*Usare i persistent cookie*/

    /*TODO capire dove mettere queste variabili della rootscope. Se messe in app.js ci sono problemi nella minificazione*/
    sessionStorage.isLogged=false;
    $rootScope.isLogged=false;
    $rootScope.showLogin=false;
    $rootScope.showRicercaRipetizioni=false;
    
    $rootScope.showLeMieRipetizioni=false;

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

    $scope.doAccedi= function() {
        if($scope.username == "" || $scope.password == "") {alert('Devi inserire username e password per accedere al Portale!'); return false;} 
        //viene lanciato quando faccio submit
        services.getFromRESTServer("username="+$scope.username+"&password="+$scope.password,"login").
        success(function (data) {
            if(data.jsonError != null || data.errCode != null)
            {
                alert (data.errMsg);
            }
            else { 
                alert('Benvenuto ' + data[0].NOME);

                sessionStorage.isLogged = true;
                $rootScope.isLogged = sessionStorage.isLogged;
                
                $rootScope.showLogin=false;
                $rootScope.userData=data[0];

            }
            //stampa il JSON Object
            //alert(JSON.stringify(data));
        });
    } //end doAccedi

    //cancella il form
    $scope.doReset = function() {
        $scope.datada=null;
        $scope.dataa=null;
        $scope.orada=null;
        $scope.oraa=null;
    };
}]);