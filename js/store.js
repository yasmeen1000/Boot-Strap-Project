function change_colorb(icon) {
    icon.style.color = "black";
    icon.style.cursor = "pointer";

}

function change_colorw(icon) {
    icon.style.color = "white";
}

$(document).ready(function() {
    $(".store").addClass("fadeInUp");
    $(".section-title").addClass("slideInDown");

    $(".store-item").each(function(index) {
        $(this).addClass("animate-delay-" + index);
    });

    $(".view").addClass("fadeInUp");

});

