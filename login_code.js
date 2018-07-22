
/**
 * Primary function called when a user clicks button to login.
 */
function login_user() {
	let user_password = document.getElementById('password').value;
	let user_username = document.getElementById('username').value;
	
	if (!is_valid_username(user_username) || 
	  !is_valid_password(user_password)) {
		messages.innerText = "Access denied";
	    return;
	}
	
	messages.innerText = "Access granted";
}

/**
 * This function will make sure the username follows the rules
 */
function is_valid_username(username) {
	return true;
}

/**
 * This function will make sure the password follows the rules
 */
function is_valid_password(password) {
	return true;
}