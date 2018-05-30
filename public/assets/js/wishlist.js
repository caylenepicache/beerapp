
$(document).ready(function() { 
    

    $("#wishlist-button").on("click", function(event) {

        var brewID = $(this).data("id");

        event.preventDefault();

    
        function getFromDB(brewID) {
            $.get("/api/wishlist", brewID);
        }
            


    });

    

    function addToWishlist(data) {
        $.post("/api/brewery-wishlist", data)
        
    }

});