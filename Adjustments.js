/** The Google maps API is a bit finicky when it comes to adjusting its height in CSS; it won't take perentages 
- so every time the window is resized, set its height to a solid value based on the current height of the document.*/
var adjustMapSize = () => {
	
	document.getElementById('map').setAttribute("style", "height: 0px;"); //Clear the map from the screen, so it is not influencing the height of the document.
	
	//Wait for a bit before setting the size to ensure we are doing so AFTER the document has been resized.
	setTimeout(function(){
		document.getElementById('map').setAttribute("style", "height:" + $(document).height() +"px;");
	}, 100);
		
}
window.addEventListener('resize', adjustMapSize, true);
window.addEventListener('load', adjustMapSize, true)
