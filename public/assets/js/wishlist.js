
$(document).ready(function() { 
    $("#wishlist-button").on("click", function(event) {

        event.preventDefault();

        var breweryName = $("#brewerName");
        var breweryAddress = $("#breweryAddress");
        var breweryURL = $("#breweryURL");

           var wishlist = {
                breweryName: breweryName.val(),
                breweryAdress: address.val(),
                breweryURL: url.val()
            };

            addingToWishlist(wishlist);

    });

    function getFromDB(data) {
        $.get("")
    }

    function addToWishlist(data) {
        $.post("/api/wishlist/", data)
        .then(function(data) {
            console.log(data);
            console.log("user added brewery: " + data + "to the wishlist");
        });
    }

    $.get("/wishlist", function(data) {
        window.location.href = "landing"    
        console.log(data);

    })
});