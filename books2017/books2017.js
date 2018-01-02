 $(document).ready(function () {
    //get the element ready onloading
    var $texts = $('.text');
    //$("span").filter("#fiction").css("background-color", "yellow");

    $texts.click(function () { //target the $text object for a click event 
        $(this).toggleClass('p2'); //toggle between adding and removing the 'p2' class

    });
    
    
    var $fiction = $('#fiction');
    $fiction.click(function () {       //$("#div1").remove();
        $(this).toggleClass('#fiction').css("background-color", "yellow");

    });
    
    var $nonfiction = $('#nonfiction');
    $nonfiction.click(function () {
        $(this).filter('#nonfiction').css("background-color", "yellow");
        
    });
    
     
    //var search = document.querySelector(".guesses-left")
    var $search = $('#searchVal');
    $("searchVal").submit(function(){
        alert("wow");
    })
     
});
  
     

   items.filter(function () {
        return $(this).text().toLowerCase().indexOf(text) == 0;
    }).parent().show();
});
     
   /*  
     $("#searchVal").keypress(function(e) {
    if(e.which == 13) {
        var x = Document.getElementById("#searchVal");
alert("you pressed enter!")
        //alert(x);
    $("#seachVal").click();
    }
         
         else {
             alert("what's happening?");
         }
}); */


/* 
var $fiction = $('#fiction');

$fiction.click(function(){
    $(this).filter("#fiction").css("background-color", "yellow");
});


$("span").filter("#fiction")
$("span").filter("#nonfiction")





*/
