document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelectorAll('#map').length > 0)
    {
      if (document.querySelector('html').lang)
        lang = document.querySelector('html').lang;
      else
        lang = 'en';
  
      var js_file = document.createElement('script');
      js_file.type = 'text/javascript';
      js_file.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAEf9Ta7LT8WZrkuXzavhwGEoxAZms58ck&callback=initMap&language=' + lang;
      document.getElementsByTagName('head')[0].appendChild(js_file);
    }
  });
  
  
  var map;
  
  
  function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 32.715736, lng: -117.161087},
      zoom: 8
    });
  
    fetch('assets/json/breweries.json')
      .then(function(response){return response.json()})
      .then(plotMarkers)
  }
   
   
  function plotMarkers(breweriesObj){
    var image = "assets/img/beer-icon.png";
    var markers = [];
    var bounds = new google.maps.LatLngBounds();
  
    
    breweriesObj.forEach(function (marker) {
      var position = new google.maps.LatLng(marker.latitude, marker.longitude);
  
      //Intializes the infoWindow obj
      var infowindow = new google.maps.InfoWindow({
        content: "<div id='infoWindow'>" +
                 "<h1 id='breweryName'class='info'>" + marker.brewery + "</h1>" +
                 "<p id='breweryAddress'class='info'>" + marker.address + "</p>" +
                 "<a id='breweryURL' href=" + marker.url + " target='_blank'>" + marker.url + 
                 "</a>" + 
                 "<button onClick='wishlist' class='wishlist-button' data-id='" + marker.brewID + "' >Add It To Your Wishlist!</button>" + 
                 "</div>"
      });
  
      var marker =  new google.maps.Marker({
        position: position,
        map: map,
        icon: image,
        animation: google.maps.Animation.DROP,
      })
  
      //Creates event listeners for all of the pins
      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });
  
      markers.push(marker);
  
      bounds.extend(position);
    });
  
    map.fitBounds(bounds);
  }
  
  function wishlist(){

$(".wishlist-button").on("click", function(event) {

  var wishlist = $(".wishlist-button");
        console.log(wishlist);
        var brewID = $(wishlist).attr("data-id");
        console.log(brewID);
  
      });
};
  


  