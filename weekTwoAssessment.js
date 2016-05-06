$(document).ready(function() {

//make a counter for the click events on generat button

//calling appendDom function
appendDom(container);
  //making appendDom function to make additional buttons
  function appendDom() {
      var $el = $('#container').children().last();
        $('#container').append('<div class="button"></div>');
        $el.data('button');

//make a way to delete the delete button
  //$el.append('<input type="submit" value="delete" />');

//how about a if else for changing color on change color boxes

    
      }
});
