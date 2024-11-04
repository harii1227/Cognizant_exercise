
// JavaScript (in script.js file):

function passwordFormValidation() {
	var firstName = document.getElementById("firstName").value;
	var password = document.getElementById("password").value;
	var reTypePassword = document.getElementById("reTypePassword").value;
	
	if (firstName === "") {
		document.getElementById("demo").innerHTML = "First Name has to be entered";
		return;
	}
	
	if (password !== reTypePassword) {
		document.getElementById("demo").innerHTML = "Password and Re-type Password do not match";
		return;
	}
	
	if (password.length < 8) {
		document.getElementById("demo").innerHTML = "Password should be at least 8 characters long";
		return;
	}
	
	document.getElementById("demo").innerHTML = "Form submitted successfully";
}


This code meets the objectives:

1. The Submit button calls the passwordFormValidation() function when clicked.
2. All input tags have a border radius of 5px.
3. First Name is a mandatory field, and an error message is displayed if it remains empty.
4. The code checks if the Password and Re-type password fields have the same value and displays an error message if they differ.

Additionally, the code checks if the password is at least 8 characters long and displays an error message if it's not. If all validation checks pass, it displays a success message.

You can add more validation rules as needed.