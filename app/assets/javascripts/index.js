document.addEventListener("turbolinks:load", function(event) {

  if(document.getElementById('mapindex')){

    var mymap = L.map('mapindex');

    var useraddress = L.marker([51.5, -0.09]).addTo(mymap);

    mymap.setView([43.6532, -79.3832], 13);


    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoibmRlbGZvcm5vIiwiYSI6ImNqbzY2MzlyZTBoczUzcW5sc2k3dGFsZ2YifQ.JL97VOzlsaPc4uDrUwlAnw'
      }).addTo(mymap);
    }

});
