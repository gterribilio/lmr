'use strict';

angular.module('lemieripetizioni3App') //non metto le quadre perchè lo sto richiamando
.factory('services', function($http) {
    var service = {};
    service.getFromRESTServer = function(msg,callback) {
        /*alert("msg: "+msg);*/
        return $http.jsonp("http://lemieripetizioni.altervista.org/JSONEngine.php?callback=JSON_CALLBACK&action="+callback+"&"+msg);
    }
    return service;
});
