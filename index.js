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
        $('.card').addClass('card-featured');
        $('#wrap').addClass('wrap-active');
        // alert('aa');
    })

    $('.close-modal-featured').on('click', function() {
        $('#wrap').removeClass('wrap-active');
        $('.card').removeClass('card-featured');
    })


    // product 
    $('.btn-view-product').on('click', function(){
        $('.galery').addClass('galery-active');
        $('#wrap').addClass('wrap-active');
    })

    $('.close-galery').on('click', function(){
        $('.galery').removeClass('galery-active');
        $('#wrap').removeClass('wrap-active');
    })
})