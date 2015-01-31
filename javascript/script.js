function myFunction() {

	var regex = /asian|abelism|gender|transgendered/g;
    var x = document.getElementById("content-area").value;

    var output = x.match(regex);

    for ( var i=0; i < output.length; i++ ) {
    	var message;
    	if (output[i] === 'asian') {
    		message = 'this is a message for asian';
    	}
    	if (output[i] === 'gender') {
    		message = 'this is a message for gender';
    	}
    	$("#messages").append('<li>' + output[i] + ' ' + message + '</li>');
    }
    console.log(output);
    console.log(output.length);

}