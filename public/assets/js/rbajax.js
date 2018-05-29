var search = "sculpin";

//var keys = require('./keys.js');
//var ratebeerkey = keys.ratebeer.id;
//console.log(ratebeerkey)

//var fs = require("fs");
//var objJSON = JSON.parse(fs.readFileSync('../data/csvjson.json', 'utf8'));

//console.log(objJSON);
//console.log("name: " + objJSON.breweries[0].name);
//console.log("ID: " + objJSON.breweries[0].RBbrewId);


/*
if (search === objJSON.breweries[0].name) {
    brewID = objJSON.breweries[0].RBbrewId
}
*/

function beerSearchAjax() {
    $.ajax({
        url: 'https://api.r8.beer/v1/api/graphql/',
        headers: {
            'x-api-key': '73i1tSPJcE4PlIEgT5vWA8pzyaz1hitV3hYmam7H',
            'content-type': "application/json",
            'accept': "application/json"
        },
        method: 'POST',
        dataType: 'json',
        data: '{"query":"query {beerSearch(query: \\"' + search + '\\", first: 10) {items {id name description averageRating imageUrl brewer {id} style {name} }}}", "variables":"{}", "operationName":null}',
        success: function(data){
        JSON.stringify(data);
        console.log('success: '+data);
        }
        })
      // We store all of the retrieved data inside of an object called "response"
    .then(function(response) {

        // Log the queryURL
        //console.log(queryURL);

        // Log the resulting object
        console.log(response);
        console.log(response.data.beerSearch.items[0].id);
        /*
        // Transfer content to HTML
        $(".city").html("<h1>" + response.name + " Weather Details</h1>");
        $(".wind").text("Wind Speed: " + response.wind.speed);
        $(".humidity").text("Humidity: " + response.main.humidity);
        $(".temp").text("Temperature (F) " + response.main.temp);

        // Log the data in the console as well
        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + response.main.temp);


        */
      });
 };

 /*

function brewerySearchAjax() {
    $.ajax({
    url: 'https://api.r8.beer/v1/api/graphql/',
    headers: {
        'x-api-key': ratebeerkey,
        'content-type': "application/json",
        'accept': "application/json"
    },
    method: 'POST',
    dataType: 'json',
    data: '{"query":"query {beersByBrewer(brewerId: \\"' + search + '\\", first: 10) {items {id name description averageRating imageUrl brewer {id} style {name} }}}", "variables":"{}", "operationName":null}',
    success: function(data){
    JSON.stringify(data);
    console.log('success: '+data);
    }
    })
    // We store all of the retrieved data inside of an object called "response"
.then(function(response) {

    // Log the queryURL
    //console.log(queryURL);

    // Log the resulting object
    console.log(response);
    console.log(response.data.beerSearch.items[0].id);
    /*
    // Transfer content to HTML
    $(".city").html("<h1>" + response.name + " Weather Details</h1>");
    $(".wind").text("Wind Speed: " + response.wind.speed);
    $(".humidity").text("Humidity: " + response.main.humidity);
    $(".temp").text("Temperature (F) " + response.main.temp);

    // Log the data in the console as well
    console.log("Wind Speed: " + response.wind.speed);
    console.log("Humidity: " + response.main.humidity);
    console.log("Temperature (F): " + response.main.temp);


    
    });
};

*/

//function stringToId {
//    if ()
//}

/* -----------------CONNECT TO SEARCH BAR -------------------
$(".input").keypress(function(event) {
    if (event.which == 13) {
    event.preventDefault();
    // This line grabs the input from the textbox
    search = $("#searchBar").val().trim();
    console.log(search)
    //check everytime it changes
    // Initalizes function to immediately display the added button
    //typeahead npm
    if (searchType === 1) {
        beerSearchAjax();
    }
    else {
        brewerySearchAjax();
    }
    }
}); 

*/

beerSearchAjax();