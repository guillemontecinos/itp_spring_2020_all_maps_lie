// initialize map
let map = L.map('map').setView([42.35, -71.08], 13);

// load a tile layer
L.tileLayer('http://tiles.mapc.org/basemap/{z}/{x}/{y}.png',
{
attribution: 'Tiles by <a href="http://mapc.org">MAPC</a>, Data by <a href="http://mass.gov/mgis">MassGIS</a>',
maxZoom: 17,
minZoom: 9
}).addTo(map)

$.getJSON('neighborhoods.geojson', function(hoodData){
    L.geoJson(hoodData, {
        style: function(feature){
            let fillColor, 
                density = feature.properties.density
            if(density > 80) fillColor = "#006837"
            else if ( density > 40 ) fillColor = "#31a354"
            else if ( density > 20 ) fillColor = "#78c679"
            else if ( density > 10 ) fillColor = "#c2e699"
            else if ( density > 0 ) fillColor = "#ffffcc"
            else fillColor = "#f7f7f7"  // no data
            return {color: "#999", weight: 1, fillColor: fillColor, fillOpacity: .6}
        },
        onEachFeature: function(feature, layer){
            layer.bindPopup("<strong>" + feature.properties.Nate + "</strong><br/>" + feature.properties.density + " rats per square mile" )
        }
    }).addTo(map)
})

$.getJSON('rodents.geojson', function(data){
    L.geoJson(data, {
        pointToLayer: function(feature, latlng){
            let marker = L.marker(latlng)
            marker.bindPopup(feature.properties.Location + '<br/>' + feature.properties.OPEN_DT)
            return marker
        }
    }).addTo(map)

})