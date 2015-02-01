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

    var i;
    for (i = 0; i < data.length; i++) {
        var keywords = data[i].keywords;
        var j;
        for (j = 0; j < keywords.length; j++) {
            var keyword = keywords[j].keywordText;
            var index = text.indexOf(keyword);
            if (index != -1) {
                var preText = '<span class="' + data[i].categoryName.toLowerCase().replace(/\s+/g, '') + '">';
                var postText = '</span>';
                text = [text.slice(0, index), preText, keyword, postText, text.slice(index+keyword.length)].join('');
            }
        }
    }

    $("#summary").append('<p>' + text + '</p>');



}