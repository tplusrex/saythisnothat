function myFunction() {

	var regex = /asian/g;
    var x = document.getElementById("content-area").value;

    var match;

	while ( (match = regex.exec(x)) !== null )  {  
	  console.log(match[1]);
	}


}