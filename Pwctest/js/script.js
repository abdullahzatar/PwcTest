var city = "amman";
var lng = "35.930359";
var lat = "31.963158";

// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com
mapboxgl.accessToken =
  "pk.eyJ1IjoiYWJkdWxsYWh6YXRhcjk5IiwiYSI6ImNsY2RhYWR4dDBid3kzcXB1bmc1Y3Fhc3IifQ.DJ8lJW0m6aMHsXWlXsVKuw";

const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v12", // style URL
  center: [lng, lat], // starting position [lng, lat]
  zoom: 6, // starting zoom
});

function searchmap() {
  city = document.getElementById("textmap").value;
  console.log(city);

  mapboxgl.accessToken =
    "pk.eyJ1IjoiYWJkdWxsYWh6YXRhcjk5IiwiYSI6ImNsY2RhYWR4dDBid3kzcXB1bmc1Y3Fhc3IifQ.DJ8lJW0m6aMHsXWlXsVKuw";

  $.ajax({
    method: "GET",
    url: "https://api.api-ninjas.com/v1/geocoding?city=" + city,
    headers: { "X-Api-Key": "3MYqzBGaqAE3us0Pq1Nocg==xQOoTJniC9KHOAsV" },
    contentType: "application/json",
    success: function (result) {
      lng = result[0].longitude;
      lat = result[0].latitude;
      const map = new mapboxgl.Map({
        container: "map", // container ID
        style: "mapbox://styles/mapbox/streets-v12", // style URL
        center: [lng, lat], // starting position [lng, lat]
        zoom: 6, // starting zoom
      });
    },
    error: function ajaxError(jqXHR) {
      console.error("Error: ", jqXHR.responseText);
    },
  });
}
