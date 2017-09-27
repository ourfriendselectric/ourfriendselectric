$(document).ready(function() {
  // Show the contact form
  $( "#caret" ).click(function(event) {
    event.preventDefault();
    target = $ (this).attr('href');
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 500);
  });

  // Show the contact form
  $( "#contact" ).click(function(event) {
    event.preventDefault();
    $('#overlay').addClass('active');
    $('.contact').addClass('active');
  });

  // Hide the contact form when the overlay is clicked
  $( "#overlay" ).click(function(event) {
    hideContact(event);
  });
  // Also close it when you click the cross
  $( "#close" ).click(function(event) {
    hideContact(event);
  });

  resizeFeatureImage();
});

function hideContact(e) {
    e.preventDefault();
    $('#overlay').removeClass('active');
    $('.contact').removeClass('active');
}

function slideshow(images) {
  var min = 0;
  var max = images.length - 1;
  var random = Math.floor(Math.random() * (max - min + 1)) + min;
  var image = "url(" + images[random] + ")";
  $('.hero').css('background-image', image);

  random++;
  if (random > max) {
    random = min;
  }
  image = images[random].replace("images/hero", "images/hero/square");
  $('#ofe-feature .inner img').attr('src', image)
  // $('#ofe-feature .inner img').css('background-image', image);
}

// On the resize of the window, resize dynamic images so fill the screen
var rtime;
var timeout = false;
var delta = 300;
$(window).resize(function() {
    rtime = new Date();
    if (timeout === false) {
        timeout = true;
        setTimeout(resizeEnd, delta);
    }
});

function resizeEnd() {
    if (new Date() - rtime < delta) {
        setTimeout(resizeEnd, delta);
    } else {
        timeout = false;
        resizeFeatureImage();
    }               
}

function resizeFeatureImage() {
  $( ".project" ).each( function(index, element) {

    details = $(element).find('.details');
    collage = $(element).find('.collage');

    if ($(window).width() > 922) {
      collage.detach().appendTo($(element).find('.desktop-collage'));
    } else {
      collage.detach().appendTo($(element).find('.mobile-collage'));
    }
    
  });
}