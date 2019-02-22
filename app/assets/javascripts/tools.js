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

  if (hasMap) {
    var mymap = L.map('mapid');
    var toolAddresses = document.querySelectorAll(".toolAddress");
    var toolAddressesText = []
    for (var i = 0; i < toolAddresses.length; i++) {
      toolAddressesText.push(toolAddresses[i].innerText)
    }
    console.log(toolAddressesText);
    var userAddress = document.getElementById("user_address");
    var userAddressText = userAddress.innerText || '';

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


    if (toolAddresses) {
      for (var i = 0; i < toolAddressesText.length; i++) {
        const {
          data
        } = await fetchOpenStreetMap(toolAddressesText[i]);
        const {
          lat,
          lon
        } = data[0];
        const corner1 = [lat, lon];

        arrayOfLatLong.push(corner1)
        mymap.setView(corner1, 13)
        L.marker(corner1).addTo(mymap);
      }
    }

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoibmRlbGZvcm5vIiwiYSI6ImNqbzY2MzlyZTBoczUzcW5sc2k3dGFsZ2YifQ.JL97VOzlsaPc4uDrUwlAnw'
    }).addTo(mymap);
  }

  if (userAddress) {
    const {
      data
    } = await fetchOpenStreetMap(userAddressText);
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

    console.log(arrayOfLatLong);
    var bounds = new L.LatLngBounds(arrayOfLatLong);
    mymap.fitBounds(bounds);
  }
});
