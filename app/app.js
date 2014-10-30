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
 .module('lemieripetizioni3App',[
 	'ngRoute',
 	'ngAnimate', 
 	'Services',
 	'DettRipetizioniCtrlModule', 
 	'LoginCtrlModule','Animations', 
 	'RicercaRipetizioniCtrlModule',
 	'angularDatepicker', 
 	'LocalStorageModule', 
 	'passwordCheckDirective',
 	'DirectivesModule'
 	]);

 app.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
 	$routeProvider.

 	when('/ricerca_ripetizione', {templateUrl: 'views/ricerca_ripetizioni.html', controller: 'RicercaRipetizioniCtrl'}).
 	when('/login', {templateUrl: 'views/login.html', controller: 'LoginCtrl'}).
 	when('/ripetizione/:id', {templateUrl: 'views/dett_ripetizione.html', controller: 'DettRipetizioniCtrl'}).
 	otherwise({redirectTo: '/'});
 }]);