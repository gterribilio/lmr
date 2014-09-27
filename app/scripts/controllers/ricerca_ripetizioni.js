'use strict';

/**
 * @ngdoc function
 * @name lemieripetizioniApp.controller: RicercaRipetizioniCtrl
 * @description
 * # RicercaRipetizioniCtrl
 * Controller of the lemieripetizioniApp
 */

angular.module('lemieripetizioni3App')
.controller('RicercaRipetizioniCtrl', function ($scope, services) {
    $scope.ripetizioni = [];

    $scope.ordine_scuola="3";
    $scope.citta="VENARIA";

    $scope.SignUp = function() {

        //viene lanciato quando faccio submit
        services.getFromRESTServer("ord_scuola="+$scope.ordine_scuola+"&citta_filtro="+$scope.citta,"ricerca_quando").
        success(function (data) {
            $scope.ripetizioni=data;
            $scope.msg=data.errMsg;
        });
    } //end ricercaQuando

    //cancella il form
    $scope.reset = function() {
        $scope.ordine_scuola = "";
        $scope.citta = "";
    };
});
