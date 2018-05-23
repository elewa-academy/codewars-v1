function string_reverser_handler() {
	// retrieve user input and clean it
    var string_to_reverse = document.getElementById("string-to-reverse").value;

    // pass user input through logic
	var result = string_reverser(string_to_reverse);

	// write output to dom
    var string_reverser_display = document.getElementById("string_reverser_display");
    string_reverser_display.innerHTML = "Your string reversed: " + result;
}


