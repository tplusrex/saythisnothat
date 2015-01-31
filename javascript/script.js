function myFunction() {

	var regex = /asian/g;
    var x = document.getElementById("content-area").value;

    var match = regex.exec(x);
    console.log(match);


}