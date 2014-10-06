function callIsValid(){
	console.log(document);
	var address = document.getElementById('address');
	var city = document.getElementById('city');
	var state = document.getElementById('state');
	var zip = document.getElementById('zip');
	$http.get("isValid");
}
