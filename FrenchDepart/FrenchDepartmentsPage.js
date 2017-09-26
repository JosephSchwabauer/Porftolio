var englishArray = ["Hauts-de-France is between Calais and Picardy. Hauts-de-France has a common frontier with Belgium on the west and the Channel on the east. The people of Boulogne-Sur-Mer are well known for the fresh seafood soup, Gaine&#233 Boulounnaise. Here is a French fill text. I do not imagine it is grammatically correct, but oh well. This project has been transformed into a school project in the French classroom into a web design project involving students, Here is a French fill text. I do not imagine it is grammatically correct, but well. This project has been transformed into a school project in the French classroom into a web design project involving students, Hauts-de-France has a common frontier with Belgium on the west and the Channel on the east. The people of Boulogne-Sur-Mer are well known for their fresh seafood soup, Gaine&#233 Boulounnaise. Here is a French fill text. I do not imagine it is grammatically correct, but oh well. Hauts-de-France is between Calais and Picardy. Hauts-de-France has a common frontier with Belgium on the west and the Channel on the east. The people of Boulogne-Sur-Mer are well known for the fresh seafood soup, Gaine&#233 Boulounnaise. Here is a French fill text. I do not imagine it is grammatically correct, but oh well. This project has been transformed into a school project in the French classroom into a web design project involving students, Here is a French fill text. I do not imagine it is grammatically correct, but well. This project has been transformed into a school project in the French classroom into a web design project involving students, Hauts-de-France has a common frontier with Belgium on the west and the Channel on the east. The people of Boulogne-Sur-Mer are well known for their fresh seafood soup, Gaine&#233 Boulounnaise. Here is a French fill text. I do not imagine it is grammatically correct, but oh well."]; 

var love = "I should at least give her a big smile on the way out.";
var item = " ";

$('.photo').hide().each(function(index) {          // Hide photos items
    $(this).delay(450 * index).fadeIn(1200);     // Then fade them in one at a time
    });


var $texts = $('.blurb_bubble');          // Cache the bubble texts

$texts.on('click', 'p', function() {
    var $this = $(this);               // Cache the  p element in a jQuery object
    var notEnglish = $this.hasClass('bubble_text');  // does the element have the class 'bubble_text'?
    if (notEnglish === true) {           // Check if item has the bubble_text class                        
      $texts.replaceWith('<p class=\"blurb_bubble_E\">' + englishArray[0] + '</p>');  //
    }
});

//$texts.replaceWith('<p class=\"blurb_bubble_E\">'englishArray[0]'</p>');




    
    


/*

$(document).ready(function(){
    $('#english').on('click', function(e) {
    e.preventDefault();
    //var url = this.href;
    
    $('#container').remove();
    $('#container').load('hauts.html #content').hide().fadeIn('slow');
    });
});


var xhr = new XMLHttpRequest();   //create XML object

xhr.onload = function() {   
    if(xhr.status == 200 {   //test if server status is ok
       document.getElementById('english').innerHTML = xhr.responseText;   //update 
       }
};

xhr.open('GET', 'hauts.html', true);
xhr.send(null);

*/

/*
$(function() {
    var english;
    $.ajax({
        beforeSend: function(xhr) {
            if (xhr.overrideMimeType) {
                xhr.overrideMimeType("application/json");
            }
        }
    });
    
    function loadEnglish() {
        $.getJSON('data/FrenchDepartment.json')
        .done( function(data) {
            english = data;
        }).fail( function() {
            $('#event').html('Sorry! That is not loading properly');
        });
        }
        
    loadEnglish();
    
    $('#english').on('click', '#event a', function(e) {
        e.preventDefault();
        var loc = this.id.toUpperCase();
        
        var newContent = '';
        for (var i = 0; i < english[loc].length; i++) {
            newContent += english[loc][i].p.replace();
        }
        
        $('#english').html('<p>' + newContent + '</p>');
    }
                     
                    
                    
                    )
    
    }
  
);
 
 
 */
 
 
 