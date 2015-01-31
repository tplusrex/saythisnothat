var template = _.template($("#category-template").html()); //create template obj with underscore
$("body").append(template({data: data})); //pass data into template obj and append to body (TODO change to apend to div)

$('.btn-toggle').click(function() {
    $(this).find('.btn').toggleClass('active');
    
    if ($(this).find('.btn-primary').size()>0) {
      $(this).find('.btn').toggleClass('btn-primary');
    }
    if ($(this).find('.btn-danger').size()>0) {
      $(this).find('.btn').toggleClass('btn-danger');
    }
    if ($(this).find('.btn-success').size()>0) {
      $(this).find('.btn').toggleClass('btn-success');
    }
    if ($(this).find('.btn-info').size()>0) {
      $(this).find('.btn').toggleClass('btn-info');
    }
    
    $(this).find('.btn').toggleClass('btn-default');
       
});