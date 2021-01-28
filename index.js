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

    // featured product 
    $('.btn-learn-more').on('click', function(){
        $('#wrap').addClass('wrap-active');
        // alert('aa');
    })

    $('.close-modal-featured').on('click', function() {
        $('#wrap').removeClass('wrap-active');
    })
})