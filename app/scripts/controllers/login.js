var dett = angular.module('LoginCtrlModule', []);

dett.controller('LoginCtrl',  ['$scope', '$rootScope', '$window', 'services', '$location', function ($scope, $rootScope, $window, services, $location) {
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

                $location.path("/ricerca_ripetizione");

            }
            //stampa il JSON Object
            //alert(JSON.stringify(data));
        });
    } //end doAccedi
}]);