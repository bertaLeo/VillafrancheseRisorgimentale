document.addEventListener("DOMContentLoaded", function(event) {
var map = L.map('map', {
    center: [45.35567, 10.84192],
    zoom: 15,
    dragging: false,
    tap: false,
    zoomControl: false 
    // scrollWheelZoom: false,
    // dragging: false,
    // tap: false
});
var x = document.getElementById("demo");
        
        function getLocation() {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
          } else { 
            x.innerHTML = "Geolocation is not supported by this browser.";
          }
        };
        
        function showPosition(position) {
          x.innerHTML = "Latitude: " + position.coords.latitude + 
          "<br>Longitude: " + position.coords.longitude;
        };

        L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
                    attribution: '&copy;&nbsp;<a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>&nbsp;contributors&nbsp;-&nbsp;&copy;&nbsp;<a href="http://cartodb.com/attributions">CartoDB</a>'
        }).addTo(map);
        if ('geolocation' in navigator) {
          console.log('geolocation available');
          navigator.geolocation.getCurrentPosition(position => {
            latitudine = position.coords.latitude;
            longitudine = position.coords.longitude;
            console.log(latitudine, longitudine);
            const marker = L.marker([latitudine, longitudine], {icon: myIcon2}).addTo(map);
          });
        } 
        else {
          console.log('geolocation not available');
        };
      

        //icone 
        var myIcon = L.icon({
          iconUrl: 'image/circle24.png',
          iconRetinaUrl:'image/circle48.png',
          iconSize: [10, 10],
          iconAnchor: [5, 5],
          popupAnchor: [1,0],
        });
        var myIcon2 = L.icon({
          iconUrl: 'image/pin24blu.png',
          iconRetinaUrl: 'image/pin48blu.png',
          iconSize: [15, 24],
          iconAnchor: [9, 21],
          popupAnchor: [0, -14],
        });

        var markers = [
          //per casa del trattato 45.3527089,10.8427425
            {
              lat: 45.35765, 
              long: 10.83989,
              titolo: "<center>Tag 1</center>",
              video: 'video/casa-del-trattato/index.html',
            },
            {
              lat: 45.3527089, 
              long: 10.8427425,
              titolo: "<center>Casa del Trattato</center>",
              video: 'video/casa-del-trattato/index.html',
            },
            {
              lat: 45.35332,
              long: 10.84387,
              titolo: "<center>Tag 3</center>",
              video: 'video/casa-del-trattato/index.html',
            }
        ];

        for (var i = 0; i < markers.length; ++i) {
            L.marker([markers[i].lat, markers[i].long], { icon: myIcon})
                .bindPopup(
                '<div>' + markers[i].titolo + '</div>' + 
                '<center><a href="' +
                    markers[i].video +
                    '" > VIDEO </a></center>'
                )
                .addTo(map);
        };

        //posizione barra di attribuzione copyright
        map.attributionControl.setPosition('topright');
});