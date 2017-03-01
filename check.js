function strikeout() {
  var $inputs = $('input');

  $inputs.each(function() {
    var $input = $(this),
        isChecked = $input.is(':checked');

    if (isChecked) {
      $input.parent().css('text-decoration', 'line-through');
    } else {
      $input.parent().css('text-decoration', 'none');
    }
  });
}

$('button').on('click', strikeout);
