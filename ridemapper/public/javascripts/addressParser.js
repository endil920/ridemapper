function callIsValid(){
	var address = document.getElementByID('address');
	var city = document.getElementByID('city');
	var state = document.getElementByID('state');
	var zip = document.getElementByID('zip');
	$http.get("isValid");
}