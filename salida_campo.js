function inicio(){

var map=L.map('map').setView([36.853, -2.438],13);

var sat= L.tileLayer(
	'https://{s}.tiles.mapbox.com/v3/southmapping.k1egc4nh/{z}/{x}/{y}.png',
	{//attribution:'<a href="http://www.southmapping.com">Southmapping.com</a></br>&copy; <a href="http://www.mapbox.com">MapBox</a> &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


map.locate({setView: true, maxZoom: 16});
function onLocationFound(e) {
    var radius = e.accuracy / 2;

    L.marker(e.latlng).addTo(map)
        /*.bindPopup("You are within " + radius + " meters from this point").openPopup()*/;

    L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

map.on('locationerror', onLocationError);
}
