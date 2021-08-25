function initGoogleMap() {
    const coords = {lat: 51.364473520265456, lng: 6.419280449229745};
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: coords,
        mapId: '46d5929e81efda3',
        disableDefaultUI: true,
    })
    map.panBy(120, 0);

    new google.maps.Marker({
        position: coords,
        map,
        title: "Mihai Tuta",
    });
}

