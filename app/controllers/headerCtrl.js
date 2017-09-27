app.controller('headerCtrl', ['$scope', function($scope){
	$scope.menu=[
	{
		"state":"introduccion",
    	"text":"Introducción", 
    	"title":"Click para ir a Introducción"
    },
    {
    	"state":"tabla",
    	"text":"Tabla Con Datos", 
    	"title":"Click para ir a Tabla Con Datos"
    },
    {
    	"state":"formulario",
    	"text":"Formulario", 
    	"title":"Click para ir a Formulario"
	}
	];
}]);