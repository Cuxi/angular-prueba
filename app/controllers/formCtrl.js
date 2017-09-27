app.controller('formCtrl', ['$scope', function($scope){
	$scope.send = false;
 	$scope.sendForm = function () {
    $scope.form = [];
    $scope.send = true;
  };

  	$scope.cleanForm = function () {
    $scope.form = [];
  };
}]);