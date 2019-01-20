$(document).ready(function(){
   
    let disp;

        $("#hamburger-menu-container").on("click", function() { 
            if(disp) {
                $(".dropdown-content").addClass("display-none");
                disp = false;
                console.log("Menu chowa się.");
            } else {
                $(".dropdown-content").removeClass("display-none");
                disp = true;     
                console.log("Menu rozwija się!");  
            }
        }); 
});