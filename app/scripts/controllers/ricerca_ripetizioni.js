'use strict';

/**
 * @ngdoc function
 * @name lemieripetizioniApp.controller: RicercaRipetizioniCtrl
 * @description
 * # RicercaRipetizioniCtrl
 * Controller of the lemieripetizioniApp
 */

 app
 .controller('RicercaRipetizioniCtrl', ['$scope', '$rootScope', '$window', 'services', function ($scope, $rootScope, $window, services) {
    $scope.ripetizioni = {};
    $scope.username = null;
    $scope.password = null;

    $scope.ordine_scuola="3";
    $scope.citta="VENARIA";

    $scope.doRicerca = function() {
        if($scope.citta == "" || $scope.ordine_scuola == "") {alert('Devi compilare tutti i campi per effettuare la ricerca'); return false;} 
        //viene lanciato quando faccio submit
        services.getFromRESTServer("ord_scuola="+$scope.ordine_scuola+"&citta_filtro="+$scope.citta,"ricerca_quando").
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
                $rootScope.userData=data;

            }
            //stampa il JSON Object
            //alert(JSON.stringify(data));
        });
    } //end doAccedi

    //cancella il form
    $scope.doReset = function() {
        //$scope.ordine_scuola = ""; al momento non ripulisco più questo campo
        $scope.citta = "";
    };
}]);
