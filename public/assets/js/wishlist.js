
$(document).ready(function() { 
    $("#wishlist-button").on("click", function(event) {

        event.preventDefault();

        var breweryName = $("#breweryName");
        var breweryAddress = $("#breweryAddress");
        var breweryURL = $("#breweryURL");

           var wishlist = {
                breweryName: breweryName.val(),
                breweryAdress: address.val(),
                breweryURL: url.val()
            };

            addingToWishlist(wishlist);

    });

    function addToWishlist(data) {
        $.post("/api/wishlist/", data)
        .then(function(data) {
            console.log(data);
            console.log("user added brewery: " + data + "to the wishlist");
        });
    }
});