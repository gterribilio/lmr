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
 .module('lemieripetizioni3App',['ngRoute','ngAnimate','Services','DettRipetizioniCtrlModule','Animations','RicercaRipetizioniCtrlModule']);

 app.config(['$routeProvider', '$httpProvider', function($routeProvider,$httpProvider) {
 		$routeProvider.
 		when('/', {templateUrl: 'views/ricerca_ripetizioni.html', controller: 'RicercaRipetizioniCtrl'}).
 		when('/ripetizione/:id', {templateUrl: 'views/dett_ripetizione.html', controller: 'DettRipetizioniCtrl'}).
 		otherwise({redirectTo: '/'});
 	}]).run(function($rootScope) {

 		/*TODO: da capire se ci sono errori di progettazione su questa parte. Serve davvero sessionStorage o posso mettere
 		le variabili in rootScoope per utilizzarle nelle varie view? E usare persistence cookie?*/

 		$rootScope.userData = {};

 		sessionStorage.isLogged=false;
 		$rootScope.isLogged=false;
 		$rootScope.showLogin=false;
 		$rootScope.showLeMieRipetizioni=false;
 	});