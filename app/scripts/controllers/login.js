var dett = angular.module('LoginCtrlModule', []);

dett.controller('LoginCtrl',  ['$scope', '$rootScope', '$window', 'services', '$location', 'localStorageService', 
    function ($scope, $rootScope, $window, services, $location, localStorageService) {

        localStorageService.set("isLogged",false);
        localStorageService.set("userData",null);

        /*la setto come variabile locale perchè la uso nella view*/
        $rootScope.isLogged=localStorageService.get("isLogged");

        $rootScope.showLogin=false;
        $rootScope.showRicercaRipetizioni=false;
        $rootScope.showLeMieRipetizioni=false;

      $scope.doAccedi= function() {
        services.getFromRESTServer("username="+$scope.username+"&password="+$scope.password,"login").
        success(function (data) {
            if(data.jsonError != null || data.errCode != null)
            {
                alert (data.errMsg);
            }
            else {

                $rootScope.isLogged = true;
                localStorageService.set("isLogged",true);
                
                $rootScope.showLogin=false;
                $rootScope.userData=data[0];
                localStorageService.set("userData",JSON.stringify($rootScope.userData));

                $location.path("/ricerca_ripetizione");

                alert("Benvenuto " + $rootScope.userData.NOME +"! Accedi subito dal menù a tutte le funzioni e trova la tua ripetizione!");

            }
            //stampa il JSON Object
            //alert(JSON.stringify(data));
        });
    } //end doAccedi

    $scope.doRegister = function() {
        //passo tutti in GET con JSONP
        services.getFromRESTServer(
            "username="+$scope.username+"&password="+$scope.password+"&professione="+$scope.professione+"&nome="+$scope.nome+
            "&cognome="+$scope.cognome+"&dataNascita="+$scope.datanascita+"&codiceFiscale="+$scope.codicefiscale+"&email="+$scope.email+
            "&citta="+$scope.citta+"&indirizzoCasa="+$scope.indirizzocasa+"&lat="+"123"+"&long="+"456"+
            /*STUDENTE*/
            "&radio-choice="+$scope.scuola+"&nomeScuolaFrequentata="+$scope.nomeScuolaFrequentata+"&indirizzoScuolaFrequentata="+
            $scope.indirizzoScuolaFrequentata+
            /*DOCENTE*/
            "&occupazione="+$scope.occupazione+"&indirizzoScuolaInsegna="+$scope.indirizzoScuolaInsegna+
            "&indirizzoUfficio="+$scope.indirizzoUfficio,"register").
        success(function (data) {
            if(data.jsonError != null || data.errCode != null)
            {
              alert (data.errMsg);
            }
            else {
                $scope.doAccedi();
            }
        });
    }
}]);