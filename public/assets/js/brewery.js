$(document).ready(function() { 
    $("#search-submit").on("click", function(event) {

        event.preventDefault();

        var breweryInput = $("#search");

            brewery({
            breweryName: breweryInput.val().trim()
        });

    });

    function addingLocation(data) {
        $.post("/api/breweries/", data)
        .then(function(data) {
            console.log(data);
        });
    }
});