let path = './nyc__rat-counts-by-neighborhood__201903-201905.json'
let contentSelection

fetch(path)
.then(response => response.json())
.then(json => 
        {
            contentSelection = json
    }); 