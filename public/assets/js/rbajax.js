
//-------------------GLOBAL VARIABLES----------------------

var button1 = document.getElementById("radios1");
var button2 = document.getElementById("radios2").addEventListener("click", onClickTypeAhead)
var fromSearchJSON;




//var keys = require('./keys');
//var ratebeerkey = keys.ratebeer.id;
//console.log("ratebeer: " + ratebeerkey)
function onClickTypeAhead() {

    var dataSource = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('brewery'),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        prefetch: {
            url: "https://raw.githubusercontent.com/caylenepicache/beerapp/master/public/assets/json/breweries.json"
        }
    });
    
    
    dataSource.initialize();
    
    $('.typeahead').typeahead({
        highlight: true
    }, {
        displayKey: 'brewery',
        source: dataSource
    });
    
        
        
    };

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

    $.post("https://glacial-cove-37095.heroku.com",ajaxData,function(data){
        console.log("data before stringify:" + data)
    }).then(function(response) {
        var BeerSearch = response.data.beerSearch;
        var BrewSearch = response.data.beersByBrewer

        fromSearchJSON = JSON.stringify(response);
        console.log('success: '+ fromSearchJSON);
        //console.log(response.data.beersearch);

//------------------USES BREW SEARCH-------------------
        if (radioChecker === 0){
            console.log("front end from brew name:" + response.data.beersByBrewer.items[0].name)

            $(".container-wishlist").append("<thead><tr><th> Beer Image</th><th> Beer Name</th><th>Beer Style</th><th> Rate Beer Rating</th><th> Description</th></tr></thead>")

        for (i = 0; i < 10; i++) {
            $(".container-wishlist").append("<tr><td><img src=" + BrewSearch.items[i].imageUrl + "></td><td>" + 
            BrewSearch.items[i].name + "</td><td>" + 
            BrewSearch.items[i].style.name + "</td><td>" + 
            Math.round(BrewSearch.items[i].averageRating * 100)/100 + "</td><td>" + 
            BrewSearch.items[i].description +  "</td><td></tr>");
        }}
//-----------USES BEER SEARCH--------------------------------------------------------
        else{
        console.log("front end beer name: " + response.data.beerSearch.items[0].name)
        console.log("front end beer style name: " + response.data.beerSearch.items[0].style.name)
        
        $(".container-wishlist").append("<thead><tr><th> Beer Image</th><th> Beer Name</th><th>Beer Style</th><th> Rate Beer Rating</th><th> Description</th></tr></thead>")

        for (i = 0; i < 10; i++) {
            $(".container-wishlist").append("<tr><td><img src=" + BeerSearch.items[i].imageUrl + "></td><td>" + 
            BeerSearch.items[i].name + "</td><td>" + 
            BeerSearch.items[i].style.name + "</td><td>" + 
            Math.round(BeerSearch.items[i].averageRating * 100)/100 + "</td><td>" + 
            BeerSearch.items[i].description +  "</td></tr>");
        }}


    })

      
 }; 



/* -----------------CONNECT TO SEARCH BAR ------------------- */
$("#search-submit").click(function(event) {
    $(".container-wishlist").empty();
        //if (event.which == 13) {
            apiSearchAjax();
            $("#search-bar").val("");

        //}
}); 


