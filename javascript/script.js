function myFunction() {

	var regex = /asian/g;
    var x = document.getElementById("content-area").value;

    var match = regex.exec(x);

    var race = ['asian','hispanic','indian','european'];

    console.log(match);
    for( var i = 0; race[i] <= race.length(); i++) {
    	if ( match === race[0] ) {
    		document.getElementById("message").innerHTML = '<p class="notes">Found asian keyword</p>';
    	}
    }


}