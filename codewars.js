// //gives a string of dots separated by /n 
// ........../n
// ........../n
// ........../n
// .......X../n
// ........../n
// ........../n


//........../n........../n.......X../n........../n........../n........../n
// The bottom left of the map is [0, 0].
// findSpaceship(map) => [7, 2]

// If you cannot find the spaceship, the result should be: "Spaceship lost forever."



function findSpacesShip(map){
	var Xindex = this.readX(map);
	if (Xindex == -1) {
		return "Spaceship lost forever."
	}

	if (Xindex)

	this.countNscapes(map, Xindex);


} 



function readX(string){
	var IndexOf_X = string.indexOf('X');
	return IndexOf_X; // -1 or N number
}


function countNscapes(string, ToIndex) {
	var WayToX = string.substring(0, ToIndex);
	var Nspaces = WayToX.match('/n');
	if (!Nspaces){
		//NO /n scapes
		return WayToX.split('/n') // array 1 elements with dots,
	}	

	WayToX.split('/n').length
}

function countDotsFromLastNscape(string){

}