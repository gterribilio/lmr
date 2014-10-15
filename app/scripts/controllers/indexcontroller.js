'use strict';

/**
 * @ngdoc function
 * @name lemieripetizioni3App.controller:IndexcontrollerCtrl
 * @description
 * # IndexcontrollerCtrl
 * Controller of the lemieripetizioni3App
 */

 var index = angular.module('IndexControllerCtrlModule', []);

 index.controller('IndexControllerCtrl', ['$scope', '$rootScope', '$window', 'services', function ($scope, $rootScope, $window, services) {

 	sessionStorage.isLogged=false;
 	$scope.isLogged=false;
 	$scope.showLogin=false;
 	$scope.showRicercaRipetizioni=false;
 	
 	$scope.showLeMieRipetizioni=false;

 	$rootScope.userData = {};
 }]);
