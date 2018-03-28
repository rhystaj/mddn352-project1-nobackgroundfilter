const WELLINGTON = {lat: -41.286460, lng: 174.776236} //The coordinates of Wellington.

/**
	Loads the imbedded map onto the page.
*/
function myMap(){
	
	var map = new google.maps.Map(document.getElementById("map"),{
		zoom: 15,
		center: WELLINGTON
	});

}