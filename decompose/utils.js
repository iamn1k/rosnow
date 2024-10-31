export function getDistance(coord1, coord2) {
    const R = 6371e3; // Earth's radius in meters
    const lat1 = coord1[1] * Math.PI / 180; // Latitude in radians
    const lat2 = coord2[1] * Math.PI / 180; // Latitude in radians
    const dLat = (coord2[1] - coord1[1]) * Math.PI / 180;
    const dLon = (coord2[0] - coord1[0]) * Math.PI / 180;

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1) * Math.cos(lat2) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // Distance in meters
}
