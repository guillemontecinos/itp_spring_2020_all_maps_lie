// Atlas of the forgotten Chile - All maps lie Final – Spring 2020
// This program sets a map and loads the images on the webpage. 


// TODO: use the json uploaded on web-map.js

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

    // fulfills the gallery grid
    for(let i = 0; i < localities.length; i++){
        loadImage(localities[i])
    }
    
    $('div').hover(
        function(){
            let hoverId = $(this).attr('id')
            if(hoverId != undefined && hoverId != 'map') {
                // modifies dot's style in the map on hover in
                console.log('highlight map element id: ' + dict[hoverId])
                map._layers[dict[hoverId]].bringToFront()
                map._layers[dict[hoverId]].setStyle(geojsonMarkerOptionsHover)
            }            
        }, 
        function(){
            let hoverId = $(this).attr('id')
            if(hoverId != undefined && hoverId != 'map') {
                // restitutes dot's style in the map on hover out
                console.log('highlight map element id: ' + dict[hoverId])
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
    imageContent.src = obj.imgsrc

    let text = document.createElement('div')
    text.className = 'text'
    text.innerText = obj.name + '\n' + obj.lat + ', ' + obj.lon

    image.appendChild(imageContent)
    galleryItem.appendChild(image)
    galleryItem.appendChild(text)
    galleryItem.id = obj.id
    galleryCont.appendChild(galleryItem)

    $('.grid-container').append(galleryCont)
}

// TODO: remove when json fetch is automated
let localities = [
    {id: 15, name: '15_Jai-a', imgsrc: './public/images/15_Jai-a.png', lat: '0.00000', lon: '0.00000'},
    {id: 16, name: '15_Jai-a', imgsrc: './public/images/15_Jai-a.png', lat: '0.00000', lon: '0.00000'},
    {id: 17, name: '15_Jai-a', imgsrc: './public/images/15_Jai-a.png', lat: '0.00000', lon: '0.00000'},
    {id: 18, name: '15_Jai-a', imgsrc: './public/images/15_Jai-a.png', lat: '0.00000', lon: '0.00000'},
    {id: 19, name: '15_Jai-a', imgsrc: './public/images/15_Jai-a.png', lat: '0.00000', lon: '0.00000'},
    {id: 20, name: '15_Jai-a', imgsrc: './public/images/15_Jai-a.png', lat: '0.00000', lon: '0.00000'},
    {id: 22, name: '15_Jai-a', imgsrc: './public/images/15_Jai-a.png', lat: '0.00000', lon: '0.00000'},
    {id: 24, name: '15_Jai-a', imgsrc: './public/images/15_Jai-a.png', lat: '0.00000', lon: '0.00000'},
    {id: 15, name: '15_Jai-a', imgsrc: './public/images/15_Jai-a.png', lat: '0.00000', lon: '0.00000'},
    {id: 16, name: '15_Jai-a', imgsrc: './public/images/15_Jai-a.png', lat: '0.00000', lon: '0.00000'},
    {id: 17, name: '15_Jai-a', imgsrc: './public/images/15_Jai-a.png', lat: '0.00000', lon: '0.00000'},
    {id: 18, name: '15_Jai-a', imgsrc: './public/images/15_Jai-a.png', lat: '0.00000', lon: '0.00000'},
    {id: 19, name: '15_Jai-a', imgsrc: './public/images/15_Jai-a.png', lat: '0.00000', lon: '0.00000'},
    {id: 20, name: '15_Jai-a', imgsrc: './public/images/15_Jai-a.png', lat: '0.00000', lon: '0.00000'},
    {id: 22, name: '15_Jai-a', imgsrc: './public/images/15_Jai-a.png', lat: '0.00000', lon: '0.00000'},
    {id: 24, name: '15_Jai-a', imgsrc: './public/images/15_Jai-a.png', lat: '0.00000', lon: '0.00000'}
]

