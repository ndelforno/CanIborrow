const fetchOpenStreetMap = (query) => {
  return axios({
    url: "https://nominatim.openstreetmap.org/search?format=json&limit=3&q=" + query,
    method: 'get',
    data: '',
    dataType: 'json',
  });
};

document.addEventListener("turbolinks:load", async (event) => {
  const hasMap = document.getElementById('mapid');
  const arrayOfLatLong = []
  const userAddress = document.getElementById("user_address");
  const arrayOfTools = document.querySelectorAll(".card-body")

  if (hasMap) {
    var mymap = L.map('mapid');

  if (userAddress) {
    var userAddressText = userAddress.innerText || '';
  }


    var homeIcon = L.icon({
      iconUrl: "https://image.flaticon.com/icons/png/128/25/25694.png",
      shadowUrl: '',

      iconSize: [30, 30], // size of the icon
      shadowSize: [50, 64], // size of the shadow
      iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62], // the same for the shadow
      popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    mymap.setView([43.6532, -79.3832], 13);


    if (arrayOfTools) {
      console.log(arrayOfTools);
      for (var i = 0; i < arrayOfTools.length; i++) {
        var searchAddress = arrayOfTools[i].querySelector('.toolAddress').innerText
        const {
          data
        } = await fetchOpenStreetMap(searchAddress);
        if (data[0]) {
          const {
            lat,
            lon
          } = data[0];
          const corner1 = [lat, lon];

          arrayOfLatLong.push(corner1)
          mymap.setView(corner1, 13)
          var toolTitle = arrayOfTools[i].querySelector(`.card-title`).innerText
          if (arrayOfTools.length > 1) {
            var tool_url = arrayOfTools[i].querySelector('.btn').href
            var marker = L.marker(corner1).addTo(mymap).bindPopup(`<b>${toolTitle}</b><br/><a href= ${tool_url}>see</a>` ).openPopup();
          } else{
            var marker = L.marker(corner1).addTo(mymap).bindPopup(`<b>${toolTitle}</b>`).openPopup();
          }
        }
      }
    }

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoibmRlbGZvcm5vIiwiYSI6ImNqbzY2MzlyZTBoczUzcW5sc2k3dGFsZ2YifQ.JL97VOzlsaPc4uDrUwlAnw'
    }).addTo(mymap);
  }

  if (userAddress) {;
    const {
      data
    } = await fetchOpenStreetMap(userAddressText);
    if (data[0]) {
      const {
        lat,
        lon
      } = data[0];
      const corner2 = [lat, lon];

      arrayOfLatLong.push(corner2)
      mymap.setView(corner2, 13)
      L.marker(corner2, {
          icon: homeIcon
        })
        .addTo(mymap);

      var bounds = new L.LatLngBounds(arrayOfLatLong);
      mymap.fitBounds(bounds);
    }
  }
});
