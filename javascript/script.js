function myFunction() {

	var regex = /asian/g;
    var x = document.getElementById("content-area").value;

    var match = regex.exec(x);
    var output = x.match(/asian/g);
    // var race = ['asian','hispanic','indian','european'];
    console.log(match[0]);
    console.log(match);
    console.log(output);
    console.log(output[0]);
    
    // for( var i = 0; race[i] <= race.length(); i++) {
    // 	if ( match[i] === race[i] ) {
    // 		document.getElementById("message").innerHTML = '<p class="notes">Found asian keyword</p>';
    // 	}
    // }


}