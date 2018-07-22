// initialize our pre-testing state
test_count = 0;
failure_count = 0;

function assertEquals(message, expected, actual) {
	general_test(
	  message, 
	  expected, 
	  actual, 
	  function(expected, actual) { return expected === actual }, 
	  function(expected, actual) { return expected + ' was not equal to ' + actual}
	);
}

function assertTrue(message, item) {
	general_test(
	  message, 
	  item, 
	  null, 
	  function(item) { return item === true }, 
	  function() { return "error: was not a true condition" } 
	);
}

function assertFalse(message, item) {
	general_test(
	  message, 
	  item, 
	  null, 
	  function(item) { return item === false }, 
	  function() { return "error: was not a false condition" } 
	);
}

/**
 * An abstraction of our test methods to avoid duplication.
 * We typically run a test on actual or actual+expected, and then we
 * return an error message that may include information from actual or 
 * actual+expected.  
 *
 * message is the description of the test, something like 
 *     "'bob' should be a valid username"
 *
 * expected / actual should be some values to test, in the comparator
 *
 * comparator is a function that tests expected or expected+actual.  For
 * example, we might assert that the "expected" parameter is true.
 */ 
function general_test(message, expected, actual, comparator, errorOutput) {
	test_count++;
	let output = "testing: " + message + "... ";
	if (!comparator.call(this, expected, actual)) {
		console.log(output + errorOutput.call(null, expected, actual));
		failure_count++;
	} else {
		console.log(output + "success");
	}
}

function report_test_results() {
	console.log (test_count + " tests were run.")
	console.log ("There were " + failure_count + " test failures");
}


