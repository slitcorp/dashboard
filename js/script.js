$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
        $('#sidebarCollapse').toggleClass('active')
        $('i', this).toggleClass("fa-align-right fa-align-left")
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
    $('.fav-button').on('click', function () {
        $('i', this).toggleClass("fa-sort-up fa-sort-down")
        $('i',this).css("transition", "all 0.8s");
    });
});