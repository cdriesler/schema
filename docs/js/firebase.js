//snippet of functioning code, given the following block sits in <head> of page, above it:
/*
	<script src="https://www.gstatic.com/firebasejs/4.8.2/firebase.js"></script>
	<script>
		// Initialize Firebase
		// Yes, I know it's stupid to expose this information like this. Using the free tier, wish me luck.
		var config = {
		apiKey: "AIzaSyD9dD5khm5O9gKNcI_Vaj1AcJ_LJFRyOWg",
		authDomain: "schema-dispatch.firebaseapp.com",
		databaseURL: "https://schema-dispatch.firebaseio.com",
		projectId: "schema-dispatch",
		storageBucket: "",
		messagingSenderId: "486382354587"
		};
		firebase.initializeApp(config);

		var database = firebase.database();
	</script>
*/

function pushEponymData() {
	var timestamp = new Date();
	var submissionID = "2018_" + timestamp.toISOString().split("T")[0].split("-")[1] + timestamp.toISOString().split("T")[0].split("-")[2] + "_" + timestamp.toISOString().split("T")[1].split(".")[0].replace(":","").replace(":","");

	var contact = document.forms["eponym_form"]["email"].value;
	var firstName = document.forms["eponym_form"]["firstname"].value;
	var secondName = document.forms["eponym_form"]["secondname"].value;

	alert("Submission ID: " + submissionID + " | " + contact.toString() + firstName.toString() + secondName.toString());

	firebase.database().ref('eponym/' + submissionID).set({
		contact: contact,
		firstname: firstName,
		secondname: secondName
	});
}