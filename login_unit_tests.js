function run_tests() {
	test("'bob' should be a valid username");
	test("'sally' should be a valid username");
	test("'randolph' should be a valid username");
	test("'abc123' should be a valid password");
	test("'abcccc' should not be a valid password");
	test("'abc!23' should be a valid password");
	test("'abc' should not be a valid password");
	report_test_results();
}

/**
 * this code looks at the string it is given and matches it
 * to known tests, so we can have input that is closer to 
 * an English sentence for our testing.
 */
function test(testString) {
	let username_matchResult = testString.match("'([^ ]+) should be a valid username")
	if (username_matchResult) {
		assertTrue("Should be true: " + username_matchResult[0], is_valid_username(username_matchResult[1]));
	}
	
	let password_matchResult = testString.match("'([^ ]+) should be a valid password")
	if (password_matchResult) {
		assertTrue("Should be true: " + password_matchResult[0], is_valid_password(password_matchResult[1]));
	}
	
	let not_password_matchResult = testString.match("'([^ ]+) should not be a valid password")
	if (not_password_matchResult) {
		assertFalse("Should be false: " + not_password_matchResult[0], is_valid_password(not_password_matchResult[1]));
	}
}
	
	