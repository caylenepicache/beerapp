
//-------------------GLOBAL VARIABLES----------------------

var button1 = document.getElementById("radios1");
var button2 = document.getElementById("radios2");




//var keys = require('./keys');
//var ratebeerkey = keys.ratebeer.id;
//console.log("ratebeer: " + ratebeerkey)


//-----------------SEARCH FOR SPECIFIC BEERS------------------
function apiSearchAjax() {
    var radioChecker = 0;
    var search;
    search = $("#search-bar").val().trim();

    if (button1.checked){
        radioChecker = 1;
    }


    var ajaxData = {
        "searchType": radioChecker,
        "searchQuery": search
    }

    $.post('http://localhost:8080/search',ajaxData,function(data){
        JSON.stringify(data);
        console.log('success: '+data);
    })
        
      // We store all of the retrieved data inside of an object called "response"
    /* .then(function(response) {

        // Log the queryURL
        //console.log(queryURL);

        // Log the resulting object
        console.log(response);
        console.log(response.data.beerSearch.items[0].id);

      }); */

      
 }; 

 
//----------------------------SEARCH FOR SPECIFIC BREWERIES-------------------
function brewerySearchAjax() {
    $.ajax({
    url: 'https://api.r8.beer/v1/api/graphql/',
    headers: {
        'x-api-key': '73i1tSPJcE4PlIEgT5vWA8pzyaz1hitV3hYmam7H',
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
    console.log(response.data.beersByBrewer.items[0].id);
    



    
    });
};



//function stringToId {
//    if ()
//}



/* -----------------CONNECT TO SEARCH BAR ------------------- */
$(".input").keypress(function(event) {
        if (event.which == 13) {
            apiSearchAjax();
        }

}); 


