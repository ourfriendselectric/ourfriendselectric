$(document).ready(function() {
  $('#fullpage').fullpage({
      //Navigation
      // menu: '#menu',
      // lockAnchors: false,
      // anchors:['firstPage', 'secondPage'],
      // navigation: false,
      // navigationPosition: 'right',
      // navigationTooltips: ['firstSlide', 'secondSlide'],
      // showActiveTooltip: false,
      // slidesNavigation: false,
      // slidesNavPosition: 'bottom',

      //Scrolling
      // css3: true,
      // scrollingSpeed: 700,
      // autoScrolling: true,
      // fitToSection: true,
      // fitToSectionDelay: 1000,
      // scrollBar: true,
      // easing: 'easeInOutCubic',
      // easingcss3: 'ease',
      // loopBottom: false,
      // loopTop: false,
      // loopHorizontal: true,
      // continuousVertical: false,
      // continuousHorizontal: false,
      // scrollHorizontally: false,
      // interlockedSlides: false,
      // dragAndMove: false,
      // offsetSections: false,
      // resetSliders: false,
      // fadingEffect: false,
      // normalScrollElements: '#element1, .element2',
      // scrollOverflow: false,
      // scrollOverflowReset: false,
      // scrollOverflowOptions: null,
      // touchSensitivity: 15,
      // normalScrollElementTouchThreshold: 5,
      // bigSectionsDestination: null,

      //Accessibility
      // keyboardScrolling: true,
      // animateAnchor: true,
      // recordHistory: true,

      //Design
      // controlArrows: true,
      // verticalCentered: false,
      // sectionsColor : ['#ccc', '#fff'],
      // paddingTop: '3em',
      // paddingBottom: '10px',
      // fixedElements: '#header, .footer',
      // responsiveWidth: 0,
      // responsiveHeight: 0,
      // responsiveSlides: false,
      // parallax: false,
      // parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

      //Custom selectors
      // sectionSelector: '.section',
      // slideSelector: '.slide',

      // lazyLoading: true,

      //events
      // onLeave: function(index, nextIndex, direction){},
      // afterLoad: function(anchorLink, index){},
      // afterRender: function(){},
      // afterResize: function(){},
      // afterResponsive: function(isResponsive){},
      // afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
      // onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
  });

  // Show the cotnact form
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
});

// On the load, resize dynamic images so fill the screen
$(window).load(function(){
  resizeImagesWithinLayout();
});
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
        resizeImagesWithinLayout();
    }               
}

function resizeImagesWithinLayout() {
  $( ".layout-one" ).each(function(index, element) {
    layoutOneImageOneHeight(element);
  });

  $( ".layout-two" ).each(function(index, element) {
    layoutOneImageOneHeight(element);
  });

  $( ".layout-three" ).each(function(index, element) {
    layoutThreeImageOneHeight(element);
  });
}

function hideContact(e) {
    e.preventDefault();
    $('#overlay').removeClass('active');
    $('.contact').removeClass('active');
}

function layoutOneImageOneHeight(section) {
  topHeight = $(section).find('.top .left').height();
  introHeight = $(section).find('.top .left .intro').outerHeight();
  padding = parseInt($(section).find('.top .left .intro').css('padding'));
  imageOneHeight = topHeight - introHeight - (padding * 2);
  $(section).find('.top .image-one').height(imageOneHeight);
}

function layoutThreeImageOneHeight(section) {
  leftHeight = $(section).find('.left').height();
  console.log(leftHeight);
  introHeight = $(section).find('.left .intro').outerHeight();
  console.log(introHeight);
  padding = parseInt($(section).find('.left .intro').css('padding'));
  console.log(padding);
  imageOneHeight = leftHeight - introHeight - (padding * 2);
  console.log(imageOneHeight);
  $(section).find('.left .image-one').height(imageOneHeight);
}

function slideshow(images) {
  var min = 0;
  var max = images.length - 1;
  var random = Math.floor(Math.random() * (max - min + 1)) + min;
  var image = "url(" + images[random] + ")";
  $('.hero').css('background-image', image);
}