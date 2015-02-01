$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('header').addClass("sticky");
  }
  else{
    $('header').removeClass("sticky");
  }
});

function myFunction() {
    var text = document.getElementById("content-area").value;

    var message = '';

    var i;
    for (i = 0; i < data.length; i++) {
        var keywords = data[i].keywords;
        message += '<h2>' + data[i].categoryName + '</h2>';
        var j;
        for (j = 0; j < keywords.length; j++) {
            var keyword = keywords[j].keywordText;
            var index = text.indexOf(keyword);
            if (index != -1) {
                 message += '<h3>' + keyword + '</h3>';
                message += '<span>Suggested Alternatives: ' + data[i].keywords[j].alternatives.join(', ') + '</span>';
                message += '<span>More Information at: ' + data[i].keywords[j].links.join(', ') + '</span>';
                var preText = '<span class="' + data[i].categoryName.toLowerCase().replace(/\s+/g, '') + '">';
                var postText = '</span>';
                text = [text.slice(0, index), preText, keyword, postText, text.slice(index+keyword.length)].join('');
            }
        }
    }

    $("#summary").append(text + '<br/><br/>' + message);



}