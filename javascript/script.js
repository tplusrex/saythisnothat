$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('header').addClass("sticky");
  }
  else{
    $('header').removeClass("sticky");
  }
});

function myFunction() {
    var text = $("#content-area").html();

    var message = '<label>SUGGESTIONS</label><div class="padThis">';

    var i;
    for (i = 0; i < data.length; i++) {
        var firstTime = true;
        var keywords = data[i].keywords;
        var j;
        for (j = 0; j < keywords.length; j++) {
            var keyword = keywords[j].keywordText;
            var index = text.indexOf(keyword);
            if (index != -1) {
                if (firstTime) {
                    message += '<h2 class="' + data[i].categoryName.toLowerCase().replace(/\s+/g, '') + '">You\'ve entered words related to ' + data[i].categoryName + '</h2>';
                    firstTime = false;
                }
                message += '<h3>Word: ' + keyword + '</h3>';
                message += '<span class="moreTab">Suggested Alternatives: ' + data[i].keywords[j].alternatives.join(', ') + '</span>';
                message += '<br/><span class="moreTab">Learn more at:<div class="tabbed">';
                var k;
                for (k = 0; k < data[i].keywords[j].links.length; k++) {
                    message += '<br/><a href="' + data[i].keywords[j].links[k] + '">' + data[i].keywords[j].links[k] + '</a>';
                }
                message += '</div></span>';
                var preText = '<span class="' + data[i].categoryName.toLowerCase().replace(/\s+/g, '') + '">';
                var postText = '</span>';
                text = [text.slice(0, index), preText, keyword, postText, text.slice(index+keyword.length)].join('');
            }
        }
    }

    $("#content-area").html(text);
    $("#suggestions").html(message + '</div>');



}