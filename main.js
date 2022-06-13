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

<<<<<<< HEAD
let map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', //'mapbox://styles/gpereira1/cl49i6d4j000314n3o7ihl0f3',
    //style: 'mapbox://styles/mapbox/light-v10',
    zoom: 10, // starting zoom
    minZoom: 10,
    maxZoom: 13,
    center: [-75.165222, 39.952583], // starting center
    projection: {
        name: 'albers',
        parallels: [25, 50]
    } // starting projection

=======
>>>>>>> parent of 01bc354c (commit maps + tiles)



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


<<<<<<< HEAD
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
=======
>>>>>>> parent of 01bc354c (commit maps + tiles)
});
