import { getDistance } from './utils.js';

export let replaying = false;
export let currentReplayIndex = 0;
export const speed = 50; // speed in km/h
export const kmToMeters = 1000; // conversion factor
export const millisecondsInAnHour = 3600000; // milliseconds in an hour
export const coordinates = []; // Import coordinates from mapFunctions.js

export function animateReplay() {
    if (!replaying || currentReplayIndex >= coordinates.length) {
        replaying = false;
        return;
    }

    const lineCoordinates = coordinates.map(coord => [coord[0], coord[1]]);
    const startPoint = lineCoordinates[currentReplayIndex];
    point.features[0].geometry.coordinates = startPoint;

    // Update the source with the new point data
    map.getSource('point').setData(point);

    if (currentReplayIndex < lineCoordinates.length - 1) {
        const nextPoint = lineCoordinates[currentReplayIndex + 1];
        const distance = getDistance(startPoint, nextPoint);
        const time = (distance / (speed * kmToMeters)) * millisecondsInAnHour;

        currentReplayIndex++;
        setTimeout(animateReplay, time);
    } else {
        replaying = false;
    }
}
