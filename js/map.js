function initGoogleMap() {
    let myLat = 51.364473520265456;
    let myLng = 6.419280449229745;
    const myCoords = new google.maps.LatLng(myLat, myLng);

    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: myCoords,
        mapId: '46d5929e81efda3',
        disableDefaultUI: true,
    })

    new google.maps.Marker({
        position: myCoords,
        map,
        title: "Mihai Tuta",
    });

    // Offsets the map on x and y axes by given parameters
    function map_recenter(latlng, offsetX, offsetY) {
        let scale = Math.pow(2, map.getZoom());

        let originPoint = map.getProjection().fromLatLngToPoint(
            (latlng instanceof google.maps.LatLng) ? latlng : map.getCenter()
        );
        let offsetPoint = new google.maps.Point(
            ((typeof (offsetX) == 'number' ? offsetX : 0) / scale) || 0,
            ((typeof (offsetY) == 'number' ? offsetY : 0) / scale) || 0
        );

        map.setCenter(map.getProjection().fromPointToLatLng(new google.maps.Point(
            originPoint.x - offsetPoint.x,
            originPoint.y + offsetPoint.y
        )));
    }

    google.maps.event.addListenerOnce(map, "projection_changed", function () {
        if (window.matchMedia("(min-width: 1201px)").matches) {
            map_recenter(myCoords, -350, 0);
        } else if (window.matchMedia("(min-width: 769px)").matches) {
            map_recenter(myCoords, -350, 0);
        } else {
            map_recenter(myCoords, -135, 0);
        }

        google.maps.event.addDomListener(window, 'resize', function () {
            if (window.matchMedia("(min-width: 1201px)").matches) {
                map_recenter(myCoords, -350, 0);
            } else if (window.matchMedia("(min-width: 769px)").matches) {
                map_recenter(myCoords, -350, 0);
            } else {
                map_recenter(myCoords, -135, 0);
            }
        })
    });
}
