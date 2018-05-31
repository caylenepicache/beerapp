var exports = module.exports = {};
var express = require('express');
var router = express.Router({mergeParams: true});
var request = require('request');
var brewJSONID;

//function takes in a string and boolean/int/something

//validate inputs if empty or not

//make a GET to ratebeer
//once it gets
//fail, error, or good case

//parse json from ratebeer and store in mysql
//return data to user

var fs = require("fs");
var brewObjJSON = JSON.parse(fs.readFileSync('./public/assets/json/breweries.json', 'utf8'));

console.log(brewObjJSON);
console.log("Name from breweJSON: " + brewObjJSON[0].brewery);

//-----------QUERY MATCHES ID IN JSON--------------------
function matchQuerytoID(req) {
    for (i=0; i<brewObjJSON.length; i++) {
        if(brewObjJSON[i].brewery == req.body.searchQuery) {
            brewJSONID = brewObjJSON[i].brewID
            console.log(brewJSONID);
        }
    }
}

exports.searchToApi = function(req, res) {
    var resultApiData;
    console.log("searchtype: " + req.body.searchType);
    console.log("searchQuery: " + req.body.searchQuery);

    //make a POST to ratebeer
function beerSearchAPI(req, res){
    var apiData;
   

    request.post({
        headers: {
            'x-api-key': process.env.RATEBEER_ID,
            'content-type': "application/json",
            'accept': "application/json"
        },
        url: 'https://api.r8.beer/v1/api/graphql/',
        body: '{"query":"query {beerSearch(query: \\"' + req.body.searchQuery + '\\", first: 10) {items {id name description averageRating ratingCount imageUrl style {name} brewer {id}}}}", "variables":"{}", "operationName":null}'
      },function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            //JSON.parse(body);
            apiData = JSON.parse(body);
            console.log("apidata: " + apiData)
            console.log("NAME: " + apiData.data.beerSearch.items[0].name)
            //return apiData;
        }}).pipe(res)
    
        //console.log("apiData: "+ apiData);
        //return apiData;
    };


function brewerySearchAPI(req,res){

    matchQuerytoID(req);
    console.log("id in the function:" + brewJSONID)

    var apiData;

    request.post({
        headers: {
            'x-api-key': process.env.RATEBEER_ID,
            'content-type': "application/json",
            'accept': "application/json"
        },
        url: 'https://api.r8.beer/v1/api/graphql/',
        body: '{"query":"query {beersByBrewer(brewerId: \\"' + brewJSONID + '\\", first: 10) {items {id name description averageRating imageUrl brewer {id} style {name} }}}", "variables":"{}", "operationName":null}'
        },function (error, response, body) {
        if (!error && response.statusCode == 200) {


            console.log(body)
            apiData = body;

            console.log("apidata: " + apiData)
            //console.log("NAME: " + apiData.data.beerSearch.items[0].name)
            //return apiData;
        }}).pipe(res)
        console.log("apiData: "+ apiData);
        //return apiData;

};

//var apiResults;

if(req.body.searchType == 0){
    //parse json from ratebeer and store in mysql
    //apiResults = brewerySearchAPI(req);
  //  console.log("apiresults: "+ apiResults);
  brewerySearchAPI(req,res);
    
}
else {
   // apiResults = beerSearchAPI(req);
  //  console.log("apiresults: "+ apiResults);
  beerSearchAPI(req,res);
}

   // console.log("apiresults: "+ apiResults);
   // res.setHeader('Content-Type', 'text');
   // res.send(apiResults);


};

/*

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
    .then(function(response) {

        // Log the queryURL
        //console.log(queryURL);

        // Log the resulting object
        console.log(response);
        console.log(response.data.beerSearch.items[0].id);

      });
 };

 */

 