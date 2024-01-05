$(document).ready(function() {
    $(".store").addClass("fadeInUp");
    $(".section-title").addClass("slideInDown");

    $(".store-item").each(function(index) {
        $(this).addClass("animate-delay-" + index);
    });

    $(".view").addClass("fadeInUp");

});