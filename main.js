var numVictim,
vicName,
vicPhoneNum,
vicStreet,
numVolunteer,
volName,
volPhoneNum,
volStreet;

// can store any type of value (primitives or objects)
var vicInfo = [];
var volInfo = [];
var addNewVic = true;

while(addNewVic) {
	var vicName = prompt("Name of the victim?");
	var vicPhone = prompt("Phone number of victim?");
	var vicStreet = prompt("And the address of the victim?");
	vicInfo.push({
		name: vicName,
		phone: vicPhone,
		street: vicStreet
	});
	addNewVic = confirm("Do you want to add a victim?");
}

// var numVictim = +prompt("How many victims?");
// for(i = 0; i<numVictim; i++ ) {
// 	// Challenge - change the prompt to dynamically say "first, second, etc"?
// }

// var numVolunteer = +prompt("How many volunteers?");
// for(i = 0; i<numVolunteer; i++) {
// 	var volName = prompt("Name of the volunteer?");
// 	var volPhone = prompt("Phone number of volunteer?");
// 	var volStreet = prompt("And the address of the volunteer?");
// 	volInfo.push({
// 		name: volName,
// 		phone: volPhone,
// 		street: volStreet
// 	});
// }

// Challenge - if only 1, change people to person
// alert("There are " + numVictim + " victim(s)" + "\n" +
// 	"And " + numVolunteer + " volunteers." + "\n" +
// 	"Specifically, " + vicInfo[0].name + " is in need of help ");

// alert(vicInfo['name']);

// alert(vicNames + " asdf");


