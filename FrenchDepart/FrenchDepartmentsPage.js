
$('#english').on('click', function(e) {
    e.preventDefault();
    //var url = this.href;
    
    $('#container').remove();
    $('#container').load(hauts.html).hide().fadeIn('slow');

});




/*
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
 
 
 