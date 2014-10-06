var rideMapper = angular.module ('ridemapper', []);

function rideMapperController($scope, $http){
	$scope.click = function(){
		var response = $http.get('/isValid');
		response.success(function(){
			console.log("yay");
		});	
	};
}