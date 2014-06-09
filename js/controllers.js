var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope) {
  $scope.students = [
    { "name":"Daniel Miller" },
    { "name":"Dave Torbeck"  },
    { "name":"Matt Cox"  },
    { "name":"Another Student"  },
    { "name":"Brentwood Fireman"  },
    { "name":"Due Ho"  },
    { "name":"Raouf Nabi"  },
    { "name":"Jason Mannon"  },
    { "name":"Jason Hamilton"  }
  ]
});
