(function () {
  var myApp = angular.module('myApp', ['ngRoute', 'ui.bootstrap', 'templates']);

  myApp.config(function ($routeProvider) {
  	$routeProvider
  		.when('/', 
  		{
  			controller: 'SignInController',
  			templateUrl: 'sign-in.html'
  		})
			
			.when('/students', 
  		{
  			controller: 'StudentsController',
  			templateUrl: 'students.html'
  		})
		
		
		;
  });

}());