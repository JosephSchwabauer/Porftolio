

$(document).ready(function(){ 
    //get the element ready onloading
    var $texts = $('.text');
    $texts.click(function(){ //target the $text object for a click event 
        $(this).toggleClass('p2');  //toggle between adding and removing the 'p2' class
    });
}); 


