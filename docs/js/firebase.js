function pushEponymData(email, firstName, secondName) {
	var timestamp = new Date();
	timestamp.format("yyyy-ddMM-hhmm");
	
	firebase.database().ref('eponym/' + timestamp).set({
		contact: email,
		firstname: firstName,
		secondname: secondName
	});
}