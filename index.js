$(document).ready(function(){

    // navbar
    $('#nav-toggle').on('click', function(){
        $('.nav-group').removeClass('collapse');
    })

    $('#close-nav').on('click', function(){
        $('.nav-group').addClass('collapse');
    })
    
    $('.menu').on('click', function(){
        $('.nav-group').addClass('collapse');
    })
})