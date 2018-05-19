$(document).ready(function() { 
    $(".submit").on("click", function(event) {

        event.preventDefault();

        var breweryInput = $("#brewery");

        addingLocation({
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