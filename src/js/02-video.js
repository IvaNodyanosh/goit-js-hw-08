import Vimeo from "@vimeo/player";

const throttle = require('lodash.throttle');

const iframe = document.querySelector("#vimeo-player");


const iframePlayer = new Vimeo(iframe);

iframePlayer.on("timeupdate", throttle((time) => {
return localStorage.setItem("videoplayer-current-time", JSON.stringify(time.seconds))
}, 1000));

iframePlayer.setCurrentTime(Number.parseFloat(localStorage.getItem("videoplayer-current-time")))
