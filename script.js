var messageNumber = $('.card').length;
$('#count').text(messageNumber);

$('.trash').click(
    function(){
      $(this).parent().remove()
      var messageNumber = $('.card').length;
      $('#count').text(messageNumber);
    }
);

var namearea = $('#namearea')
var textarea = $('#textarea')

$('#addbutton').click(
    function(){
        
      $('body').append(
        "<div class='card'><img src='/images/grey-avatar.jpg' class='avatar'></img><div class='message'><h6 class='name'>"+ namearea.val()+ "</h6><p class='text'>" + textarea.val() + "</p></div><img class='trash' src='/images/trash.png'></img></div>"
      )

      textarea.val('')
      namearea.val('')

      var messageNumber = $('.card').length;
      $('#count').text(messageNumber);


      $( ".trash" ).on( "click", function() {
        $(this).parent().remove()
        var messageNumber = $('.card').length;
        $('#count').text(messageNumber);
      });
    }
);


$('#searchbutton').click(function() {
  $('h6').each(function() {
    if($('#searcharea').val() != $(this).text()) {
      $(this).parent().parent().fadeOut()
    } else {
      $(this).parent().parent().fadeIn()
    }
  })
})




 


 
