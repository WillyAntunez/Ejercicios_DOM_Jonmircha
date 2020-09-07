import hamburgerMenu from "./hamburguer.js";
import clock_and_alarm from "./clock_and_alarm.js";
import {shortcuts, moveBall} from "./KbEvents.js";
import countDown from './countDown.js';
import arrowButton from './arrowButton.js';
import darkMode from './dark_mode.js';
import responsive from './responsive.js';
import responsiveTester from './responsiveTester.js';
import userAgent from './userAgent.js';
import conectionChecker from './conectionChecker.js';
import useWebcam from './use_webcam.js';
import geoLocation from './geolocation.js';
import searchFilter from './search_filter.js';
import raffle from './raffle.js';
import slider from './slider.js';
import scrollSpy from './scroll_spy.js';
import smartVideo from './smart_video.js';
import formValidation from './form_validation.js';
import narrator from './narrator.js';

hamburgerMenu('.hamburger', '.guide', '.guide a');

clock_and_alarm('#iniciar-reloj', '#detener-reloj', '#iniciar-alarma', '#detener-alarma', '.reloj', '#alarma');

document.addEventListener('keydown', e => {
    shortcuts(e);
    moveBall('.ball', '.moving-area', e);
});

countDown('timer');

arrowButton('.arrow');

darkMode('.dark-mode-btn');

responsive('.video', '.mapa');

responsiveTester('responsive-tester', 'url', 'width', 'height', 'closebtn', 'errors');

userAgent('user-agent-li', 'platform-li', 'browser-li', 'deviceInfo', 'browserInfo');

conectionChecker('message-box');

useWebcam('webcam-video', 'webcam-btn', 'webcam-error');

geoLocation('get-location-btn', 'location-div');

searchFilter('search-images-div', 'search-in');

raffle('participants', 'raffle-btn');

slider('slides', '.next-slide', '.previous-slide');

scrollSpy();

smartVideo();

formValidation('.contact-form');

narrator('.narrator-form')