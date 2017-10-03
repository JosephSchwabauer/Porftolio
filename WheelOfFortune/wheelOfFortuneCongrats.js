//add a document.ready funciton if you're going to keep this file  just need the $(function(){ })  (anonymous version for document ready)
 $('.cTitle').hide().each(function(index) {          // Hide photos items
    $(this).delay(450 * index).fadeIn(1200);  
     // Then fade them in one at a time
     $('#congratsMess').hide().show(900);
    });  


document.getElementById("tally").innerHTML = " ";
