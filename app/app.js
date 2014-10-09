'use strict';

/**
 * @ngdoc overview
 * @name lemieripetizioni3App
 * @description
 * # lemieripetizioni3App
 *
 * Main module of the application.
 */
 var app = angular
 .module('lemieripetizioni3App',['ngRoute','ngAnimate','Services','DettRipetizioniCtrlModule','Animations','RicercaRipetizioniCtrlModule','angularDatepicker']);

 app.config(['$routeProvider', '$httpProvider', function($routeProvider,$httpProvider) {
 		$routeProvider.
 		when('/', {templateUrl: 'views/ricerca_ripetizioni.html', controller: 'RicercaRipetizioniCtrl'}).
 		when('/ripetizione/:id', {templateUrl: 'views/dett_ripetizione.html', controller: 'DettRipetizioniCtrl'}).
 		otherwise({redirectTo: '/'});
 	}]);