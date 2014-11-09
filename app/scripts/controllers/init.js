var init = angular.module('InitCtrlModule', []);

init.controller('InitCtrl',  ['$scope', '$rootScope', '$window', 'services', '$location', 'localStorageService', 
	function ($scope, $rootScope, $window, services, $location, localStorageService) {

		/*da non spostare, altrimenti si perde lo stato isLogged se è nelle altre view e se viene fatto refresh dela pagina*/
		$rootScope.isLogged=localStorageService.get("isLogged");

}
]);