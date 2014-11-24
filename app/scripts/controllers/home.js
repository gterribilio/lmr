var init = angular.module('HomeCtrlModule', []);

init.controller('HomeCtrl',  ['$scope', '$rootScope', '$window', 'services', '$location', 'localStorageService', 
	function ($scope, $rootScope, $window, services, $location, localStorageService) {

		/*da non spostare, altrimenti si perde lo stato isLogged se è nelle altre view e se viene fatto refresh dela pagina*/
		$rootScope.isLogged=localStorageService.get("isLogged");

		$scope.doLogout = function() {
            localStorageService.clearAll();
            $location.path("/");
            $rootScope.isLogged = false;
        };

        $scope.doVaiARicerca = function() {
            $location.path("/ricerca_ripetizione");
        };

        $scope.doVaiALeMieRipetizioni = function() {
            $location.path("/le_mie_ripetizioni");
        };

        $scope.doVaiAIlMioProfilo = function() {
            $location.path("/il_mio_profilo");
        };

        $rootScope.gotoHome = function() {
         $location.path("/home");
     };

 }
 ]);