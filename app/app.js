(function () {
  var myApp = angular.module('myApp', ['ngRoute', 'ui.bootstrap']);

  myApp.config(function ($routeProvider) {
  	$routeProvider
  		.when('/', 
  		{
  			controller: 'SignInController',
  			templateUrl: 'app/views/sign-in.html'
  		})
			
			.when('/students', 
  		{
  			controller: 'StudentsController',
  			templateUrl: 'app/views/students.html'
  		})
		
		
		;
  });

}());