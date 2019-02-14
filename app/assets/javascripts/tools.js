document.addEventListener("turbolinks:load", function(event) {

  if(document.getElementById('mapid')){

    var mymap = L.map('mapid');
    var toolAddress = document.getElementById("address");
    var toolAddressText = toolAddress.innerText;
    var userAddress = document.getElementById("user_address")
    var userAddressText = userAddress.innerText

    mymap.setView([43.6532, -79.3832], 13);

    if(toolAddress){
      axios({
        url: "https://nominatim.openstreetmap.org/search?format=json&limit=3&q=" + toolAddressText,
        method: 'get',
        data: '',
        dataType: 'json',
      }).then(function(response){
        var lat = response.data[0].lat;
        var long = response.data[0].lon;
        mymap.setView([lat, long], 13)
        var marker = L.marker([lat,long]).addTo(mymap);
      });
    }

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoibmRlbGZvcm5vIiwiYSI6ImNqbzY2MzlyZTBoczUzcW5sc2k3dGFsZ2YifQ.JL97VOzlsaPc4uDrUwlAnw'
      }).addTo(mymap);
    }

    if(userAddress){
      console.log(userAddress);
      axios({
        url: "https://nominatim.openstreetmap.org/search?format=json&limit=3&q=" + userAddressText,
        method: 'get',
        data: '',
        dataType: 'json',
      }).then(function(response){
        var lat = response.data[0].lat;
        var long = response.data[0].lon;
        mymap.setView([lat, long], 13)
        var marker = L.marker([lat,long]).addTo(mymap);
      });

    }

});
