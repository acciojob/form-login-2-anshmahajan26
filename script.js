// your JS code here. If required.
let form = document.getElementById("myForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let first = form["First Name"].value;
  let last = form["Last Name"].value;
  let phone = form["Phone Number"].value;
  let email = form["Email ID"].value;

  alert(
    "First Name: " + first + " " +
    "Last Name: " + last + " " +
    "Phone Number: " + phone + " " +
    "Email ID: " + email
  );
});
