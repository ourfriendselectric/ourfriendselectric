$(document).ready(function() {

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


