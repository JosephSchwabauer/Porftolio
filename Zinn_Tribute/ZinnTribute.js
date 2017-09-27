$(document).ready(function(){
    $('.accordion').on('click', '.accordion-control', function(e){
        e.preventDefault();
        $(this).next('.panel').not(':animated').slideToggle();
    });
});