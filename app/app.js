var app=angular.module('proyecto', []);

app.controller('AppController', ['$http', '$scope', '$q',function($http, $scope, $q){
/*	
	var posts = this;
	posts = [];
	$http.get("http://blog.agresebe.com/api/posts?format=json",{
		headers: {'Content-Type': 'application/json', 
                'Accept': 'application/json',
                'X-CSRFToken': 'vjvW1w8H6i5bip4L5AGaQkvqG7yDa7n1'}
	}).success(function(data){
//	$http.get("./server/posts.json").success(function(response){
        $scope.posts = response;
    });
*/    
	$scope.posts = [];

	$http.get("./server/posts.json").success(function(response){
        $scope.posts = response;
    });

	$scope.photos = [];

    $http.get("./server/photos.json").success(function(data){
        $scope.photos = data;
    });


}]);

app.controller('EditController', ['$scope', function($scope){
/*
	$scope.send = false;
	$scope.save = function () {
           // use $.param jQuery function to serialize data from JSON 
            var data = $.param({
                title: $scope.title,
                body: $scope.body
            });
        
            var config = {
                headers : {
                    'Content-Type': 'application/json', 
                    'Accept': 'application/json',
	        		'X-CSRFToken': '4e5XldW0JXwndcrSuEvsHt7E0UiuZGLO', 
	        		'Authorization': 'Basic Y2FuZGlkYXRlOnlvdUNhbkRvSXQh'
                }
            }

            $http.post('http://blog.agresebe.com/api/posts', data, config)
            .success(function (data, status, headers, config) {
                $scope.PostDataResponse = data;
            })
            .error(function (data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
        };*/


 	$scope.save = function () {
	    $http({
	        url: "http://blog.agresebe.com/api/posts",
	        method: "POST",
	        headers: {'Content-Type': 'application/json', 
	        'Accept': 'application/json',
	        'X-CSRFToken': 'vjvW1w8H6i5bip4L5AGaQkvqG7yDa7n1'},
	        data: $.param($scope.newPost)
	    }).success(function(data, status, headers, config) {
	        $scope.status = status;
	    }).error(function(data, status, headers, config) {
	        $scope.status = status;
	    });
  };

	$scope.form = [];
    $scope.send = true;

}]);
