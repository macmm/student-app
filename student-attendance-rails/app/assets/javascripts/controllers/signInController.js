(function () {
	var SignInController = function ($scope, studentsFactory) {
//		$localCache = $cacheFactory.get('studentsCache') || $cacheFactory('studentsCache');
			
		$scope.studentsFactory = studentsFactory;
		$scope.students = studentsFactory.students;	
	};
	
	angular.module('myApp').controller('SignInController', SignInController);

}());