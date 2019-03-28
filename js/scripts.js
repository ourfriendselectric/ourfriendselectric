$(document).ready(function() {
    // Hide the NavBar on Scroll
    var additionalOffset = document.getElementById("mainNav").clientHeight;
    var prevScrollpos = window.pageYOffset;
    var anchorPoint = window.pageYOffset + additionalOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("mainNav").classList.remove("hideNav");
            document.getElementById("mainNav").classList.add("showNav");
            anchorPoint = window.pageYOffset + additionalOffset;
        } else {
            if (prevScrollpos > anchorPoint) {
                document.getElementById("mainNav").classList.remove("showNav");
                document.getElementById("mainNav").classList.add("hideNav");
            }
        }
        prevScrollpos = currentScrollPos
    }

    // If the page loads with # (Anchored to a project) then hide the nav
    // But only if you're not at the top of the page
    if (window.location.href.indexOf('#') > 0 && window.pageYOffset > 0) {
        document.getElementById("mainNav").classList.add("hideNav");
    }
});

function randomImage(images) {
    const panels = [
        '#__hero',
        '#__who_we_are',
        '#__what_we_do',
        '#__services',
    ];

    const allImages = images;
    panels.forEach(panel => {
        const index = getRandomImage(allImages);
        $(panel).css('background-image', "url(" + images[index] + ")");
        allImages.splice(index, 1);
    });
}

function getRandomImage(images) {
    const min = 0;
    const max = images.length - 1;
    return random = Math.floor(Math.random() * (max - min + 1)) + min;
}


