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

var numVictim = +prompt("How many victims?");

for(i = 0; i<=numVictim-1; i++ ) {
	// Challenge - change the prompt to dynamically say "first, second, etc"?
	var vicName = prompt("Name of the victim?");
	var vicPhone = prompt("Phone number of victim?");
	var vicStreet = prompt("And the address of the victim?");
	vicInfo.push({
		name: vicName,
		phone: vicPhone,
		street: vicStreet
	});
}
console.log(vicInfo);

// if we have 10 victims, will need an array of size 10
// can make 3 arrays (for each piece of info) or 1 of objects

// var numVolunteer = +prompt("How many volunteers?");
// for(i = 0; i<=numVolunteer; i++) {
// 	var volName = prompt("Name of the volunteer?");
// 	var volPhone = prompt("Phone number of volunteer?");
// 	var volStreet = prompt("And the address of the volunteer?");
// }

// alert the num victims and num volunteers
// Challenge - if only 1, change people to person
// alert(numVictim + " people in need of help " + "\n" +
// 	numVolunteer + " people able to help");
// alert(vicNames + " asdf");