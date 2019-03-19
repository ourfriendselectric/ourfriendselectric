$(document).ready(function() {

});

function randomImage(images) {
    console.log('Random Image');
    var min = 0;
    var max = images.length - 1;
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    var image = "url(" + images[random] + ")";
    $('#hero').css('background-image', image);
}



