(function () {
  var myApp = angular.module('myApp', ['ngRoute']);

  myApp.config(function ($routeProvider) {
  	$routeProvider
  		.when('/', 
  		{
  			controller: 'MyController',
  			templateUrl: 'app/views/sign-in.html'
  		});
  });

}());