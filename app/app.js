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
 .module('lemieripetizioni3App', [
 	'ngRoute',
 	'Services',
 	'DettRipetizioniCtrlModule', 
 	'HomeCtrlModule', 
 	'LoginCtrlModule', 
 	'IlMioProfiloCtrlModule',
 	'RicercaRipetizioniCtrlModule',
 	'LeMieRipetizioniCtrlModule',
 	'angularDatepicker', 
 	'LocalStorageModule', 
 	'passwordCheckDirective',
 	'DirectivesModule',
 	'DettPrenotazioneCtrlModule'
 	]);

 app.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
 	$routeProvider.
 	when('/', {templateUrl: 'views/login.html', controller: 'LoginCtrl'}).
 	when('/home', {templateUrl: 'views/home.html', controller: 'HomeCtrl'}).
 	when('/ricerca_ripetizione', {templateUrl: 'views/ricerca_ripetizioni.html', controller: 'RicercaRipetizioniCtrl'}).
 	when('/le_mie_ripetizioni', {templateUrl: 'views/le_mie_ripetizioni.html', controller: 'LeMieRipetizioniCtrl'}).
 	when('/ripetizione/:id', {templateUrl: 'views/dett_ripetizione.html', controller: 'DettRipetizioniCtrl'}).
 	when('/prenotazione/:id', {templateUrl: 'views/dett_prenotazione.html', controller: 'DettPrenotazioneCtrl'}).
 	when('/il_mio_profilo', {templateUrl: 'views/il_mio_profilo.html', controller: 'IlMioProfiloCtrl'}).
 	otherwise({redirectTo: '/'});
 }]);