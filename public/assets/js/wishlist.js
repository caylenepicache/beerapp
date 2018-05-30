
// $(document).ready(function() { 
    var wishlist = $("#wishlist-button");
    console.log(wishlist);

    $("#wishlist-button").on("click", function(event) {
        event.preventDefault();
        
        var wishlist = $("#wishlist-button");
        console.log(wishlist);
        var brewID = $(this).data("id");
        console.log(brewID);

        

    
        function getFromDB(brewID) {
            $.get("/api/wishlist", brewID);
        }
            


    });

    
console.log("hello");
    function addToWishlist(data) {
        $.post("/api/brewery-wishlist", data)
        
    }

// });