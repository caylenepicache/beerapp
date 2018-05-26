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

//google maps api 

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
  
    fetch('breweries.json')
      .then(function(response){return response.json()})
      .then(plotMarkers)
  }
   
   
  function plotMarkers(breweriesObj){
    var image = "./public/assets/img/beer-icon.png";
    var markers = [];
    var bounds = new google.maps.LatLngBounds();
  
    
    breweriesObj.forEach(function (marker) {
      var position = new google.maps.LatLng(marker.latitude, marker.longitude);
  
      //Intializes the infoWindow obj
      var infowindow = new google.maps.InfoWindow({
        content: "<h1>" + marker.brewery + "</h1>" +
                 "<a href=" + marker.url + " target='_blank'>" + marker.url + "</a>" +
                 "<p>" + marker.address + "</p>"
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
  
  
  
  
  