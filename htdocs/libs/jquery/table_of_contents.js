$(document).ready(function(e) {
    $(".topmenu").on('click',function (e) {
        $(this).children('div').children('ul').toggle('');
        e.preventDefault()
    });
    $('.super > li div ul li a').click(function(e) {
        e.stopPropagation();
    });
});