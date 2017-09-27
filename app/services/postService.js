app.service("postService", ["$http", function($http) {
        var posts = function(){

        	return $http.get("./server/posts.json");
/*            return $http({
		        url: "http://blog.agresebe.com/api/posts",
		        method: "GET",
		        headers: {'Content-Type': 'application/json', 'Accept': 'application/json',
		        'X-CSRFToken': '4e5XldW0JXwndcrSuEvsHt7E0UiuZGLO','Authorization': 'Basic Y2FuZGlkYXRlOnlvdUNhbkRvSXQh'},
		        data: $.param($scope.newPost)
		    });
*/        }
        return {
            posts: posts
        }
}]);
