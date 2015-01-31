$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('header').addClass("sticky");
  }
  else{
    $('header').removeClass("sticky");
  }
});

function myFunction() {

	var regex = /(lame|retard)/g;
    var x = document.getElementById("content-area").value;

    var output = x.match(regex);

    var summary = x.replace(regex,'<span class=' + '$1' + '>' + '$1' + '</span>');

    $("#summary").append('<p>' + summary + '</p>');

    for ( var i = 0; i < output.length; i++ ) {
    	var message;
    	if (output[i] === 'lame') {
    		message = 'this is a message for asian';
    	}
    	if (output[i] === 'retard') {
    		message = 'this is a message for gender';
    	}
    	$("#messages").append('<li><span class="word">' + output[i] + '</span> <span class="message">' + message + '</span></li>');
    }

    console.log(output);
    console.log(output.length);

}