export const coordinates = [];

export function initializeMap(bounds) {
    const map = new maplibregl.Map({
        container: 'map',
        zoom: 6,
        center: [92.857, 56.015],
        pitch: 70,
        bearing: 0,
        antialias: true,
        style: {
            version: 8,
            sources: {
                osm: {
                    type: 'raster',
                    tiles: ['https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'],
                    tileSize: 256,
                    attribution: '&copy; OpenStreetMap Contributors',
                    maxzoom: 19
                },
                terrainSource: {
                    type: 'raster-dem',
                    tiles: ['https://tiles.wifidb.net/data/jaxa_terrainrgb/{z}/{x}/{y}.png'],
                    tileSize: 256
                }
            },
            layers: [{
                id: 'osm',
                type: 'raster',
                source: 'osm'
            }],
            terrain: {
                source: 'terrainSource',
                exaggeration: 1.5
            },
            sky: {}
        },
        maxZoom: 18,
        maxPitch: 85,
        maxBounds: bounds
    });

    map.addControl(new maplibregl.NavigationControl({
        visualizePitch: true,
        showZoom: true,
        showCompass: true
    }));

    return map;
}

export function drawPath(map) {
    if (coordinates.length < 2) {
        alert('Please enter at least 2 coordinates.');
        return;
    }

    const lineCoordinates = coordinates.map(coord => [coord[0], coord[1]]);
    const route = {
        'type': 'FeatureCollection',
        'features': [{
            'type': 'Feature',
            'geometry': {
                'type': 'LineString',
                'coordinates': lineCoordinates
            }
        }]
    };

    if (map.getLayer('route')) {
        map.removeLayer('route');
        map.removeSource('route');
    }

    map.addSource('route', {
        'type': 'geojson',
        'data': route
    });

    map.addLayer({
        'id': 'route',
        'source': 'route',
        'type': 'line',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': '#007cbf',
            'line-width': 4
        }
    });
}
