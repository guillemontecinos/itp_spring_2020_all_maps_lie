// Atlas of the forgotten Chile - All maps lie Final – Spring 2020
// This program sets a map and loads the images on the webpage. 

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

let geojsonMarkerOptionsHover = {
    radius: 5,
    fillColor: "#ed0e0e",
    color: "#ed0e0e",
    weight: 1,
    opacity: .8,
    fillOpacity: 0.8
}

let json

// Dictionary that converts ids from the PobladosChile database into map object ids
let dict = {} 

$.getJSON('./public/json/pobladoschile-aricaiqq-500.geojson', function(data){
    json = data
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

    // fulfills the gallery grid
    for(let i = 0; i < data.features.length; i++){
        loadImage(data.features[i])
    }
    
    $('div').hover(
        function(){
            let hoverId = $(this).attr('id')
            if(hoverId != undefined && hoverId != 'map') {
                // modifies dot's style in the map on hover in
                // console.log('highlight map element id: ' + dict[hoverId])
                map._layers[dict[hoverId]].bringToFront()
                map._layers[dict[hoverId]].setStyle(geojsonMarkerOptionsHover)
            }            
        }, 
        function(){
            let hoverId = $(this).attr('id')
            if(hoverId != undefined && hoverId != 'map') {
                // restitutes dot's style in the map on hover out
                map._layers[dict[hoverId]].setStyle(geojsonMarkerOptions)
            }            
        }, 
    )
})

function loadImage(obj){
    let galleryCont = document.createElement('div')
    galleryCont.className = 'gallery-container'
    let galleryItem = document.createElement('div')
    galleryItem.className = 'gallery-item'
    let image = document.createElement('div')
    image.className = 'image'
    let imageContent = document.createElement('img')
    imageContent.src = './public/images/' + obj.properties.id + '_' + obj.properties.name + '.png.jpg'

    let text = document.createElement('div')
    text.className = 'text'
    text.innerText = obj.properties.name + '\n' + obj.geometry.coordinates[1] + ', ' + obj.geometry.coordinates[0]

    image.appendChild(imageContent)
    galleryItem.appendChild(image)
    galleryItem.appendChild(text)
    galleryItem.id = Number(obj.properties.id)
    galleryCont.appendChild(galleryItem)

    $('.grid-container').append(galleryCont)
}