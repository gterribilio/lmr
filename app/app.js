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
 	'ngAnimate', 
 	'Services',
 	'DettRipetizioniCtrlModule', 
 	'InitCtrlModule', 
 	'LoginCtrlModule',
 	'Animations', 
 	'RicercaRipetizioniCtrlModule',
 	'angularDatepicker', 
 	'LocalStorageModule', 
 	'passwordCheckDirective',
 	'DirectivesModule',
 	'DettPrenotazioneCtrlModule'
 	]);

 app.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
 	$routeProvider.
 	when('/', {templateUrl: 'views/init.html', controller: 'InitCtrl'}).
 	when('/ricerca_ripetizione', {templateUrl: 'views/ricerca_ripetizioni.html', controller: 'RicercaRipetizioniCtrl'}).
 	when('/login', {templateUrl: 'views/login.html', controller: 'LoginCtrl'}).
 	when('/ripetizione/:id', {templateUrl: 'views/dett_ripetizione.html', controller: 'DettRipetizioniCtrl'}).
 	when('/prenotazione/:id', {templateUrl: 'views/dett_prenotazione.html', controller: 'DettPrenotazioneCtrl'}).
 	otherwise({redirectTo: '/'});
 }]);