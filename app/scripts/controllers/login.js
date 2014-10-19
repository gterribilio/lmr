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

                $rootScope.isLogged = true;
                localStorageService.set("isLogged",true);
                
                $rootScope.showLogin=false;
                $rootScope.userData=data[0];
                localStorageService.set("userData",JSON.stringify($rootScope.userData));

                $location.path("/ricerca_ripetizione");

            }
            //stampa il JSON Object
            //alert(JSON.stringify(data));
        });
    } //end doAccedi

    $scope.doRegister = function() {
        services.getFromRESTServer("username="+$scope.username+"&password="+$scope.password,"register").
        success(function (data) {
            if(data.jsonError != null || data.errCode != null)
            {
                alert (data.errMsg);
            }
            else { 
                alert('Benvenuto ' + data[0].NOME);

                $rootScope.isLogged = true;
                localStorageService.set("isLogged",true);
                
                $rootScope.showLogin=false;
                $rootScope.userData=data[0];
                localStorageService.set("userData",JSON.stringify($rootScope.userData));

                $location.path("/ricerca_ripetizione");

            }
            //stampa il JSON Object
            //alert(JSON.stringify(data));
        });
    }
}]);