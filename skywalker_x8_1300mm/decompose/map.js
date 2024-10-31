import { initializeMap, drawPath, coordinates } from './mapFunctions.js';

const krasnoyarskBounds = [
    [90.0, 53.0],
    [96.0, 60.0]
];

const map = initializeMap(krasnoyarskBounds);

document.getElementById('addCoordinate').addEventListener('click', () => {
    const input = document.querySelector('#coordinates input').value;
    if (input) {
        const parts = input.split(',').map(part => parseFloat(part.trim()));
        if (parts.length === 3) {
            coordinates.push(parts);
            document.querySelector('#coordinates input').value = '';
        } else {
            alert('Please enter in format: Lng, Lat, Height');
        }
    }
});

document.getElementById('drawPath').addEventListener('click', () => {
    drawPath(map);
});
