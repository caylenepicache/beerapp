
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

    $.post('http://localhost:8080/search',ajaxData,function(data){
        console.log("data before stringify:" + data)
    }).then(function(response) {
        fromSearchJSON = JSON.stringify(response);
        console.log('success: '+ fromSearchJSON);
        //console.log(response.data.beersearch);


        if (radioChecker === 0){
            console.log("front end from brew name:" + response.data.beersByBrewer.items[0].name)
        }
        else{
        console.log("front end beer name: " + response.data.beerSearch.items[0].name)
        }


    })

      
 }; 



/* -----------------CONNECT TO SEARCH BAR ------------------- */
$("#search-submit").click(function(event) {
        //if (event.which == 13) {
            apiSearchAjax();
            $("#search-bar").val("");
        //}
}); 


