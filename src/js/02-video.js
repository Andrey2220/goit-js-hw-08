import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const currentTimeKey = 'videoplayer-current-time';

function saveCurrentTime(time) {
  localStorage.setItem(currentTimeKey, JSON.stringify(time));
}

player.on(
  'timeupdate',
  throttle(event => {
    const currentTime = event.seconds;
    saveCurrentTime(currentTime);
  }, 1000)
);

const currentTimeValue = JSON.parse(localStorage.getItem(currentTimeKey));

player
  .setCurrentTime(currentTimeValue)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });