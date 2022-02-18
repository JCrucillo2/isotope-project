$(".container").imagesLoaded(function () {
    let $grid = $(".grid").isotope({
        itemSelector: ".grid-item",
        layoutMode: "masonry",
    });
});
