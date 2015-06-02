var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

    $http.get('/contactlist').success(function(a){
    	console.log("I got the data I requested");
    	$scope.contactlist = a;
    })

}]);﻿