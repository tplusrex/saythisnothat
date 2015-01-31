function myFunction() {

	var regex = /asian/g;
    var x = document.getElementById("content-area").value;

    var match = regex.exec(x);

    var race = ['asian','hispanic','indian','european'];

    console.log(match[0]);

    for( var i = 0; race[i] <= race.length(); i++) {
    	if ( match[i] === race[i] ) {
    		document.getElementById("message").innerHTML = '<p class="notes">Found asian keyword</p>';
    	}
    }


}