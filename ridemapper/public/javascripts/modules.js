var rideMapper = angular.module ('ridemapper', []);

function rideMapperController($scope, $http){
	$scope.click = function(){
		var response = $http.get('/isValid?houseNumber=120206&street=36ave&city=Seattle&state=WA&zipCode=98125');
		response.success(function(){
			console.log("yay");
		});	
	};
}