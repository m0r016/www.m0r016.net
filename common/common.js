$(function () {
    $('a[href^="#"]').click(function () {
        var time = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" ? 'html' : href);
        var distance = target.offset().top;
        $("html, body").animate({
            scrollTop: distance
        }, time, "swing");
        return false;
    });
});
