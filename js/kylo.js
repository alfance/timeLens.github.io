
//--------------------  hide and show script --------------------------- -->

$(document).ready(function(){
    $("#welcomeb").hide();
    $(".remove-icon").hide();
    $(".nav-bar-icon").click(function(){
        $(".nav-bar").toggleClass('move-navibar move-effect');
        $(".col-md-11").toggleClass('move-content ');
        $("#welcomeb").toggle();
        $(".remove-icon").toggle();
    }); 
 
});


//--------------------  hide and show script --------------------------- -->


    var clicks = 0;
    function onClick() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    };

        
