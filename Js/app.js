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
var geojsonvisible = false;

// adding base layer map from open streemaps
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
}).addTo(map);

// adding orthophoto
var imageUrlOrtho = 'ProjectFiles/odm_orthophoto.png',
    imageBoundsOrtho = [[12.95821382396927 - 0.0002, 77.48548482192727 - 0.0002], [12.9594, 77.4861]];
var addortho = L.imageOverlay(imageUrlOrtho, imageBoundsOrtho).addTo(map);

// adding dem
var imageUrlDEM = 'ProjectFiles/dem.png',
    imageBoundsDEM = [[12.95821382396927 - 0.0002, 77.48548482192727 - 0.0002], [12.9594, 77.4861]];
var adddem = L.imageOverlay(imageUrlDEM, imageBoundsDEM).addTo(map).setOpacity(0).bringToBack();

var latlngs = [
    [12.959120656327192, 77.48569250106812],
    [12.959413412282558, 77.48572334647179],
    [12.959342837217665, 77.48609080910683],
    [12.959034397810413, 77.48602375388145]];

var addgeojson = L.polygon(latlngs, { color: 'red' }).addTo(map);

// functions
function toggleorthophoto(addortho, orthophotovisible) {

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

function toggledem(adddem, demvisible) {

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

function togglegeojson(addgeojson, geojsonvisible) {
    console.log("here");
    if (geojsonvisible === false) {
        addgeojson.opacity(1);
        geojsonvisible = true;
    }
    else {
        addgeojson.opacity(0);
        geojsonvisible = false;
    }

    return geojsonvisible;
}