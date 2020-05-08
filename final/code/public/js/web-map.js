// initialize map
let map = L.map('map').setView([-19.319975, -69.534918], 8);

let mapboxUrl = 'https://api.mapbox.com/v4/{id}/{z}/{x}/{y}.{ext}?access_token={accesToken}'
let accesToken = 'pk.eyJ1IjoiZ3VpbGxlbW9udGVjaW5vcyIsImEiOiJjanhqOXk1ajUyNG9tM3Rwa2k1NTA5Y3czIn0.empBgsAjclwQah1q9dLjiA'

L.tileLayer(mapboxUrl, {
    id: 'mapbox.light',
    attribution : '',
    maxZoom: 20,
    minZoom: 0,
    ext: 'png',
    accesToken: accesToken
}).addTo(map)

let geojsonMarkerOptions = {
    radius: 5,
    fillColor: "#000000",
    color: "#000",
    weight: 1,
    opacity: .8,
    fillOpacity: 0.8
}

// Dictionary that converts ids from the PobladosChile database into map object ids
let dict = {} 

$.getJSON('pobladoschile-aricaiqq-300.geojson', function(data){
    L.geoJson(data, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, geojsonMarkerOptions);
        }
    }).addTo(map)

    for(let key in map._layers){
        if(map._layers[key].feature != undefined){
            let id = map._layers[key].feature.properties.id
            dict[id] = key
        }
    }
})

// $.getJSON('pobladoschile-aricaiqq-300.geojson', function(data){
//     L.geoJson(data).addTo(map)
// })

