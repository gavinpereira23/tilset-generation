mapboxgl.accessToken =
    'pk.eyJ1IjoiZ3BlcmVpcmExIiwiYSI6ImNsNDIwN3dnMzAya2IzanIxenNlYm1sbmIifQ.Iw7cB4iJxs2wjI2zUhtVSg';


    let map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/gpereira1/cl2ctrpl6001214nuk8eq64nx',
            //style: 'mapbox://styles/mapbox/light-v10',
            zoom: 5, // starting zoom
            minZoom: 4,
            maxZoom: 18,
            center: [-83.75, 48.44], // starting center
            projection: {
                    name: 'albers',
                    parallels: [25, 50]
                } // starting projection

        });

map.on('load', () => { //simplifying the function statement: arrow with brackets to define a function




    map.addSource('philly-base', {
        'type': 'raster',
        'tiles': [
            'philly-base/philly-tiles/{z}/{x}/{y}.png'
        ],
        'tileSize': 256,
        'attribution': 'Map tiles designed by Bo Zhao</a>'
    });

    map.addLayer({
        'id': 'philly',
        'type': 'raster',
        'layout': {
            'visibility': 'visible'
        },
        'source': 'philly-base'
    });


});
