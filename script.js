//your JS code here. If required.
let first= document.getElementById("firstName");
let last = document.getElementById("lastName");
let phone= document.getElementById("phoneNumber");
let email = document.getElementById("emailID");
let bnt = document.getElementById("submit");
	bnt.addEventListener("click", function(){
		 "First Name: " + first.value + " " +
    "Last Name: " + last.value + " " +
    "Phone Number: " + phone.value + " " +
    "Email ID: " + email.value
		
	})