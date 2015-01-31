function myFunction() {

	var regex = /asian|abelism|gender|transgendered/g;
    var x = document.getElementById("content-area").value;

    var output = x.match(regex);

    console.log(output);
    console.log(output.length);

}