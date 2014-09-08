(function () {
  var myApp = angular.module('myApp', ['ngRoute']);

  myApp.config(function ($routeProvider) {
  	$routeProvider
  		.when('/', 
  		{
  			controller: 'StudentsController',
  			templateUrl: 'app/views/sign-in.html'
  		});
  });

}());