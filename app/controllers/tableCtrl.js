app.controller('tableCtrl', ['$scope', 'dataTableService', function ($scope, dataTableService) {

  dataTableService.getData().then(function(response){
    $scope.dataTable = response.data;
  },
  function(err){
    console.log(err);
  });

  $scope.removeRow = function (i) {
    $scope.dataTable.splice(i, 1);
  };

}]);
