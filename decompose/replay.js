import { animateReplay, replaying, coordinates } from './replayFunctions.js';

document.getElementById('replay').addEventListener('click', () => {
    if (coordinates.length < 1) {
        alert('Please enter at least 2 coordinates to replay.');
        return;
    }
    animateReplay();
});
