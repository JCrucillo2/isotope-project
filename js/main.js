$(".container").imagesLoaded(function () {
    let $grid = $(".grid").isotope({
        itemSelector: ".grid-item",
        layoutMode: "masonry",
    });

    $(".item-menu").on("click", "li", function () {
        let filterValue = $(this).attr("data-filter");

        $grid.isotope({ filter: filterValue });
    });
});

$(".selectGroup").each(function (i, selectGroup) {
    let $selectGroup = $(selectGroup);

    $selectGroup.on("click", "li", function () {
        $selectGroup.find(".is-checked").removeClass("is-checked");
        $(this).addClass("is-checked");
    });
});
