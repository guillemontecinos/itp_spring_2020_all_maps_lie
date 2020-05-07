# All Maps Lie - Class Notes

[Class Website](https://all-maps-lie-2020.netlify.com/)

## Week 1 – Everything is spatial
* a map about all the households nobody cares
* The Power Broker: Robert Moses and the Fall of New York. Robert A. Caro

## Week 2
* [Ben Wllington](https://iquantny.tumblr.com/about)
* [carto.com](https://carto.com/)
* null island is because the (0,0) position in the atlantic
* what does it mean for something to have a location?
* 1569, Mercator projection
* Latitudinally position was easy to get due to the North Pole start, but Longitudinally was a problem until the 1700's
* Greenwich clock
    * The world gets splitted in 24 sections, each hour of the sun rotaiton represents 15º
* **Mapping: placing things relative to fixed points**
* [Gunter's chain](https://en.wikipedia.org/wiki/Gunter%27s_chain)
* [Geoid](https://en.wikipedia.org/wiki/Geoid)
* Datum: spatial/coordinate reference system
    * WGS84: earth centered datum
* Every projection compromises a specific feature
* GIS
* Quantum GIS
* Turf.js
* Raster data is arranged as a matrix where each pixel represetns a surface
* GeoJSON
* tiles!!!
* [Anatomy of a web map](http://maptime.io/anatomy-of-a-web-map/#0)
* Joey provided open data to map

## Week 3
* Tools:
    * [DataWrapper.de](https://www.datawrapper.de/)
    * [leaflet.js](https://leafletjs.com/)
    * [deck.gl](https://deck.gl/)
    * [turf.js](https://turfjs.org/)

## Week 4
* [terrapattern](http://www.terrapattern.com/)
* [radio.garden](http://radio.garden/)
* [Penny @ Stamen](https://stamen.com/work/penny/)
* [Hidden Faces](https://geo.hidden-faces.net/beta/)
* [Roads to Rome – Move-Lab](https://www.move-lab.com/project/roadstorome/)
* [From point A to point B](https://from-a-to-b.github.io/)
* [Voronoi Tessellation](https://en.wikipedia.org/wiki/Voronoi_diagram)

## Week 7 - Notes from Joey

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.10.2/p5.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.10.2/addons/p5.sound.min.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
    <meta charset="utf-8" />

  </head>
  <body>
    
    <div class="image-container">
      <img class="image" src="https://www.nationalgeographic.com/content/dam/ngdotcom/rights-exempt/maps/world-classic-2018-banner-clip-72.adapt.1900.1.jpg" style="width:200px"/>
      <p class="image__text"> helloooo </p>
    </div>
    
    <div class="image-container">
      <img class="image" src="https://www.nationalgeographic.com/content/dam/ngdotcom/rights-exempt/maps/world-classic-2018-banner-clip-72.adapt.1900.1.jpg" style="width:200px"/>
      <p class="image__text"> helloooo </p>
    </div>
    
    
    <div class="image-container">
      <img class="image" src="https://www.nationalgeographic.com/content/dam/ngdotcom/rights-exempt/maps/world-classic-2018-banner-clip-72.adapt.1900.1.jpg" style="width:200px"/>
      <p class="image__text"> helloooo </p>
    </div>
    
    <div class="image-container">
      <img class="image" src="https://www.nationalgeographic.com/content/dam/ngdotcom/rights-exempt/maps/world-classic-2018-banner-clip-72.adapt.1900.1.jpg" style="width:200px"/>
      <p class="image__text"> helloooo </p>
    </div>
    
    <script class="image" src="sketch.js"></script>
  </body>
</html>
```

```css
html, body {
  margin: 0;
  padding: 0;
}
canvas {
  display: block;
}

.image-container{
  position:relative;
  border:1px solid black;
}

.image-container:hover > .image__text{
  opacity:1;
}

.image__text{
  position: absolute;
  top:0;
  left:0;
  opacity:0;
  transition: all 1s;
}
```