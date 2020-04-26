// initialize map
let map = L.map('map').setView([-19.319975, -69.534918], 8);

let mapboxUrl = 'https://api.mapbox.com/v4/{id}/{z}/{x}/{y}.{ext}?access_token={accesToken}'
let accesToken = 'pk.eyJ1IjoiZ3VpbGxlbW9udGVjaW5vcyIsImEiOiJjanhqOXk1ajUyNG9tM3Rwa2k1NTA5Y3czIn0.empBgsAjclwQah1q9dLjiA'

L.tileLayer(mapboxUrl, {
    id: 'mapbox.satellite',
    attribution : '',
    maxZoom: 20,
    minZoom: 0,
    ext: 'png',
    accesToken: accesToken
}).addTo(map)

$.getJSON('pobladoschile-aricaiqq-300.geojson', function(data){
    L.geoJson(data).addTo(map)
})

// $.getJSON('regiones.geojson', function(regiones){
//     L.geoJson(regiones).addTo(map)
// })