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
var addNewVol = true;

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

// Challenge - change the prompt to dynamically say "first, second, etc"?

while(addNewVol) {
	var volName = prompt("Name of the volunteer?");
	var volPhone = prompt("Phone number of volunteer?");
	var volStreet = prompt("And the address of the volunteer?");
	volInfo.push({
		name: volName,
		phone: volPhone,
		street: volStreet
	});
	addNewVol = confirm("Do you want to add a volunteer?");
}

// this is the # of char in the last name entered.
// bc vicName is a string  
// vicName.length-1

// Challenge - if only 1, change people to person
alert("There are " + vicInfo.length + " victim(s)" + "\n" +
	"And " + volInfo.length + " volunteer(s)." );
	// "Specifically, " +  + " is in need of help ");

var checkVicMatch = prompt("Find a volunteer for a specific victim." + "\n" +
	"Enter the name of a person in need");

if(checkVicMatch === volStreet) {
	alert(volName + " is available on the same street")
}
