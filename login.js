document.getElementById("login-submit").addEventListener('click', function () {
	const emailField = document.getElementById('user-email');
	const useremail = emailField.value;
	// console.log(useremail);


	// get userpass
	const passwordField = document.getElementById("user-password");
	const userpassword = passwordField.value;

	if (useremail == 'sontan@gmail.com' && userpassword == "secret") {
		// console.log('valid user');
		window.location.href = 'banking.html'
	}

	else {
		console.log("Non valid user");
	}

})