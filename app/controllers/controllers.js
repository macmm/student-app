(function () {
	
	var MyController = function ($scope) {
	  $scope.students = [];
	  $scope.addStudent = function() {
	    $scope.students.push({"name": $scope.studentName});
	    $scope.studentName = null;
	  };
	  $scope.deleteStudent = function(student) {
	    var index = $scope.students.indexOf(student)
	    $scope.students.splice(index, 1);
	  };
	};
	
	angular.module('myApp').controller('MyController', MyController);

}());