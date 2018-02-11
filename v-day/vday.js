 $(document).ready(function () {
    //get the element ready onloading
    var $pics = $('.pics');
    //$("span").filter("#fiction").css("background-color", "yellow");

    $texts.click(function () { //target the $text object for a click event 
        $(this).toggleClass('p2'); //toggle between adding and removing the 'p2' class

    });
    
     
    var $fiction = $('#fiction');
    $fiction.click(function () {       //$("#div1").remove();
        $(this).toggleClass('#fiction').css("background-color", "yellow");

    });