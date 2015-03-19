var map;
var marker;

function initialize() {
    var mapOptions = {
        center: { lat: -34.397, lng: 150.644},
        zoom: 5
    };
    this.map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
};
function placeMarker(location) {
    if (marker) {
        //if marker already was created change positon
        marker.setPosition(location);
    } else {
        //create a marker
        marker = new google.maps.Marker({
            position: location,
            map: map,
            draggable: true
        });
    }
}
google.maps.event.addDomListener(window, 'load', initialize);
