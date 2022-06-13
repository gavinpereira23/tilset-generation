mapboxgl.accessToken =
    'pk.eyJ1IjoiZ3BlcmVpcmExIiwiYSI6ImNsNDIwN3dnMzAya2IzanIxenNlYm1sbmIifQ.Iw7cB4iJxs2wjI2zUhtVSg';


const bounds = [
    [-75.24000016400674, 39.8901849890572],
    [-75.11807534849851, 39.98239529631935]
]

let map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', //'mapbox://styles/gpereira1/cl49i6d4j000314n3o7ihl0f3',
    //style: 'mapbox://styles/mapbox/light-v10',
    zoom: 11, // starting zoom
    minZoom: 11,
    maxZoom: 14,
    center: [-75.165222, 39.952583], // starting center
    projection: {
        name: 'albers',
        parallels: [25, 50]
    } // starting projection

});

map.on('load', () => {

    map.addSource('philly-base', {
        'type': 'raster',
        'tiles': [
            'philly-base-tiles/{z}/{x}/{y}.png'
        ],
        'tileSize': 256,
        'minZoom': 11,
        'maxZoom': 14
    });



    map.addLayer({
        'id': 'philly-base',
        'type': 'raster',
        'layout': {
            'visibility': 'visible'
        },
        'source': 'philly-base'
    });


    map.addSource('philly-thematic', {
        'type': 'raster',
        'tiles': [
            'philly-thematic-tiles/{z}/{x}/{y}.png'
        ],
        'tileSize': 256
    });







    map.addSource('philly-combined', {
        'type': 'raster',
        'tiles': [
            'philly-combined-tiles/{z}/{x}/{y}.png'
        ],
        'tileSize': 256
    });



    map.addLayer({
        'id': 'philly-combined',
        'type': 'raster',
        'layout': {
            'visibility': 'visible'
        },
        'source': 'philly-combined'
    });


    map.addSource('philly-sixers', {
        'type': 'raster',
        'tiles': [
            'philly-sixers-tiles/{z}/{x}/{y}.png'
        ],
        'tileSize': 256
    });



    map.addLayer({
        'id': 'philly-sixers',
        'type': 'raster',
        'layout': {
            'visibility': 'visible'
        },
        'source': 'philly-sixers'
    });


    map.addLayer({
        'id': 'philly-thematic',
        'type': 'raster',
        'layout': {
            'visibility': 'visible'
        },
        'source': 'philly-thematic'
    });







    // map.on('mousemove', (e) => {
    //         // `e.point` is the x, y coordinates of the `mousemove` event
    //         // relative to the top-left corner of the map.
    //         JSON.stringify(e.point) +
    //         '<br />' +
    //         // `e.lngLat` is the longitude, latitude geographical position of the event.
    //         console.log(JSON.stringify(e.lngLat.wrap()));
    // });


});


map.on('idle', () => {


    // Enumerate ids of the layers.
    const toggleableLayerIds = ['philly-base', 'philly-thematic', 'philly-combined', 'philly-sixers'];

    // Set up the corresponding toggle button for each layer.
    for (const id of toggleableLayerIds) {
        // Skip layers that already have a button set up.
        if (document.getElementById(id)) {
            continue;
        }

        // Create a link.
        const link = document.createElement('a');
        link.id = id;
        link.href = '#';
        link.textContent = id;
        link.className = 'active';

        // Show or hide layer when the toggle is clicked.
        link.onclick = function(e) {
            const clickedLayer = this.textContent;
            e.preventDefault();
            e.stopPropagation();

            const visibility = map.getLayoutProperty(
                clickedLayer,
                'visibility'
            );

            // Toggle layer visibility by changing the layout object's visibility property.
            if (visibility === 'visible') {
                map.setLayoutProperty(clickedLayer, 'visibility', 'none');
                this.className = '';
            } else {
                this.className = 'active';
                map.setLayoutProperty(
                    clickedLayer,
                    'visibility',
                    'visible'
                );
            }
        };

        const layers = document.getElementById('menu');
        layers.appendChild(link);

    }
});
