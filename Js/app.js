function setdev() {
    const mapdiv = document.getElementById('map');
    const navbar = document.getElementById('navbar');
    const navbar_height = navbar.offsetHeight;
    mapdiv.style.height = window.innerHeight - navbar_height + 'px';
    mapdiv.style.width = window.innerWidth + 'px';
}

setdev();

const zoom_level = 100;
const lat = 12.958765168509556;
const long = 77.4858100304824;
const latplus = 12.9594;
const longplus = 77.4861;
const map = L.map('map').setView([lat, long], zoom_level);
var orthophotovisible = true;
var demvisible = false;

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
}).addTo(map);

var imageUrlOrtho = 'ProjectFiles/odm_orthophoto.png',
    imageBoundsOrtho = [[12.95821382396927 - 0.0002, 77.48548482192727 - 0.0002], [12.9594, 77.4861]];
var addortho=L.imageOverlay(imageUrlOrtho, imageBoundsOrtho).addTo(map);

var imageUrlDEM = 'ProjectFiles/dem.png',
    imageBoundsDEM = [[12.95821382396927 - 0.0002, 77.48548482192727 - 0.0002], [12.9594, 77.4861]];
var adddem=L.imageOverlay(imageUrlDEM, imageBoundsDEM).addTo(map).setOpacity(0).bringToBack();

function toggleorthophoto(addortho,orthophotovisible) {

    if (orthophotovisible === false) {
        addortho.setOpacity(1);
        orthophotovisible = true;
    }
    else {
        addortho.setOpacity(0);
        orthophotovisible = false;
    }

    return orthophotovisible;
}

function toggledem(adddem,demvisible) {

    if (demvisible === false) {
        adddem.setOpacity(1);
        demvisible = true;
    }
    else {
        adddem.setOpacity(0);
        demvisible = false;
    }

    return demvisible;
}