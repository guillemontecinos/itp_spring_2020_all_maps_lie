// This script loads the images on the webpage. TODO: use the json uploaded on web-map.js
let localities = [
    {id: 15, name: '15_Jai-a', imgsrc: './public/images/15_Jai-a.png', lat: '0.00000', lon: '0.00000'},
    {id: 15, name: '15_Jai-a', imgsrc: './public/images/15_Jai-a.png', lat: '0.00000', lon: '0.00000'},
    {id: 15, name: '15_Jai-a', imgsrc: './public/images/15_Jai-a.png', lat: '0.00000', lon: '0.00000'},
    {id: 15, name: '15_Jai-a', imgsrc: './public/images/15_Jai-a.png', lat: '0.00000', lon: '0.00000'},
    {id: 15, name: '15_Jai-a', imgsrc: './public/images/15_Jai-a.png', lat: '0.00000', lon: '0.00000'},
    {id: 15, name: '15_Jai-a', imgsrc: './public/images/15_Jai-a.png', lat: '0.00000', lon: '0.00000'},
    {id: 15, name: '15_Jai-a', imgsrc: './public/images/15_Jai-a.png', lat: '0.00000', lon: '0.00000'},
    {id: 15, name: '15_Jai-a', imgsrc: './public/images/15_Jai-a.png', lat: '0.00000', lon: '0.00000'},
    {id: 15, name: '15_Jai-a', imgsrc: './public/images/15_Jai-a.png', lat: '0.00000', lon: '0.00000'},
    {id: 15, name: '15_Jai-a', imgsrc: './public/images/15_Jai-a.png', lat: '0.00000', lon: '0.00000'},
    {id: 15, name: '15_Jai-a', imgsrc: './public/images/15_Jai-a.png', lat: '0.00000', lon: '0.00000'},
    {id: 15, name: '15_Jai-a', imgsrc: './public/images/15_Jai-a.png', lat: '0.00000', lon: '0.00000'},
    {id: 15, name: '15_Jai-a', imgsrc: './public/images/15_Jai-a.png', lat: '0.00000', lon: '0.00000'},
    {id: 15, name: '15_Jai-a', imgsrc: './public/images/15_Jai-a.png', lat: '0.00000', lon: '0.00000'},
    {id: 15, name: '15_Jai-a', imgsrc: './public/images/15_Jai-a.png', lat: '0.00000', lon: '0.00000'},
    {id: 15, name: '15_Jai-a', imgsrc: './public/images/15_Jai-a.png', lat: '0.00000', lon: '0.00000'},
    {id: 15, name: '15_Jai-a', imgsrc: './public/images/15_Jai-a.png', lat: '0.00000', lon: '0.00000'},
    {id: 15, name: '15_Jai-a', imgsrc: './public/images/15_Jai-a.png', lat: '0.00000', lon: '0.00000'},
    {id: 15, name: '15_Jai-a', imgsrc: './public/images/15_Jai-a.png', lat: '0.00000', lon: '0.00000'},
    {id: 15, name: '15_Jai-a', imgsrc: './public/images/15_Jai-a.png', lat: '0.00000', lon: '0.00000'},
    {id: 15, name: '15_Jai-a', imgsrc: './public/images/15_Jai-a.png', lat: '0.00000', lon: '0.00000'},
    {id: 15, name: '15_Jai-a', imgsrc: './public/images/15_Jai-a.png', lat: '0.00000', lon: '0.00000'},
    {id: 15, name: '15_Jai-a', imgsrc: './public/images/15_Jai-a.png', lat: '0.00000', lon: '0.00000'},
    {id: 15, name: '15_Jai-a', imgsrc: './public/images/15_Jai-a.png', lat: '0.00000', lon: '0.00000'},
    {id: 15, name: '15_Jai-a', imgsrc: './public/images/15_Jai-a.png', lat: '0.00000', lon: '0.00000'},
    {id: 15, name: '15_Jai-a', imgsrc: './public/images/15_Jai-a.png', lat: '0.00000', lon: '0.00000'}
]

for(let i = 0; i < localities.length; i++){
    loadImage(localities[i])
}

$('div').hover(
    function(){
        let hoverId = $(this).attr('id')
        if(hoverId != undefined && hoverId != 'map') console.log('highlight map element id: ' + dict[hoverId])
        // TODO: call event that highlights dot in the map
    }
)

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