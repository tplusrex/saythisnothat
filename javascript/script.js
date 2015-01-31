function myFunction() {

	var regex = /asian/g;
    var x = document.getElementById("content-area").value;

    var match = regex.exec(x);
    console.log(match);

    if( match[0] === 'asian' ) {
    	document.getElementById("message").innerHTML = '<p class="notes">Found asian keyword</p>';
    }

}