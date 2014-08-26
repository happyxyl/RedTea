var snow = 1;
function snow_fly(){
	function inner(){
		var inner_var = 4;
		console.log(snow);
	}
	inner();
}
snow_fly();
