//salida_campo javascript

function inicio(){
var access=L.mapbox.accessToken = 'pk.eyJ1Ijoic291dGhtYXBwaW5nIiwiYSI6IkdsNWJpUzQifQ.wGioWqTZt28vefHwFu1hQA';

var map=L.mapbox.map('map','southmapping.l8dfiplm');

map.locate({setView: false, maxZoom: 16});

////////////////////////////////LOCATION SETTINGS////////////////////////////////////////////

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

////////////////////////////////END LOCATION SETTINGS////////////////////////////////////////

//POPUP FUNCTION
function creaPopup(feature, layer) {
	if (feature.properties && feature.properties.name){
	layer.bindPopup("<center><h1>"+feature.properties.name+"</h1><a href="+feature.properties.img_url+" data-lightbox=salida><img src="+feature.properties.img_url+" height=200px width=300px></a></center>",
	{minWidth:350, className:"custom-popup"});
}};
//DATA
var estilo_ruta={"color":"#a3e46b", "weight":8, "opacity":0.8};

var ruta=L.geoJson(path, {style:estilo_ruta}).addTo(map);
var puntos=L.geoJson(points,{onEachFeature:creaPopup}).addTo(map);

//END INICIO()
}
