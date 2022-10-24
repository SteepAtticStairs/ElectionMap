function loadGubernatorialData() {
    $.getJSON('./data/states.geojson', function(data) {
        for (var item in data.features) {
            var base = data.features[item].properties;
            var state = base.name;
            var margin = gubernatorialMargins[state];

            if (state == undefined) {
                console.log(data.features[item])
            }

            if (margin != undefined) {
                base.variableColor = getColor(margin, 'variable');
                base.binaryColor = getColor(margin, 'binary');
            } else {
                base.variableColor = 'rgb(128, 128, 128)'
                base.binaryColor = 'rgb(128, 128, 128)'
            }
        }

        console.log(`Data fetched in ${Date.now() - startTimer} ms`);
        map.addSource('geojsonSource', {
            type: 'geojson',
            data: data
        });

        map.addLayer({
            'id': 'districtsLayer',
            'type': 'fill',
            'source': 'geojsonSource',
            paint: {
                //#0080ff blue
                //#ff7d7d red
                'fill-color': ['get', 'variableColor'],
                'fill-opacity': 1
            }
        });
        map.addLayer({
            'id': 'districtsLayerOutline',
            'type': 'line',
            'source': 'geojsonSource',
            'paint': {
                //#014385 blue
                //#850101 red
                'line-color': 'black',
                'line-width': 1
            }
        });
        function sourceCallback() {
            if (map.getSource('geojsonSource') && map.isSourceLoaded('geojsonSource')) {
                console.log(`Map layer loaded in ${Date.now() - startTimer} ms`);
                map.off('sourcedata', sourceCallback);
            }
        }
        map.on('sourcedata', sourceCallback);

        function isNegative(num) {
            if (Math.sign(num) === -1) {
                return true;
            }
            return false;
        }

        map.on('click', 'districtsLayer', (e) => {
            console.log(e.features[0])
            var state = e.features[0].properties.name;
            var margin = gubernatorialMargins[state];

            // convert to positive number
            var marginPercent = Math.abs(margin);
            // convert to percent (e.g. 0.342 becomes 34.2)
            marginPercent = parseFloat(marginPercent) * 100;
            // toFixed() rounds the number because of floating point errors
            var marginFormatted = `${marginPercent.toFixed(2)}%`

            if (isNegative(margin)) {
                marginFormatted = `D+${marginFormatted}`
            } else {
                marginFormatted = `R+${marginFormatted}`
            }
            // e.g. R+39%

            var popupContent;
            if (margin != undefined) {
                popupContent =
                `<div>
                    <div><b>State:</b> ${state}</div>
                    <div><b>Margin:</b> ${marginFormatted}</div>
                </div>`
            } else {
                popupContent =
                `<div>
                    <div>No gubernatorial race for <b>${state}</b></div>
                </div>`
            }

            var pop = new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(popupContent)
                //.setHTML(e.features[0].properties.description)
                .addTo(map);
        })
    })
}