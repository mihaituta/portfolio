function initGoogleMap() {
    let myLat = 51.364473520265456;
    let myLng = 6.419280449229745;
    const latlng = new google.maps.LatLng(myLat, myLng);

    /*   google.maps.Map.prototype.setCenterWithOffset = function (latlng, offsetX, offsetY) {
           let map = this;
           let ov = new google.maps.OverlayView();
           ov.onAdd = function () {
               let proj = this.getProjection();
               let aPoint = proj.fromLatLngToContainerPixel(latlng);
               aPoint.x = aPoint.x + offsetX;
               aPoint.y = aPoint.y + offsetY;
               map.setCenter(proj.fromContainerPixelToLatLng(aPoint));
           }
           ov.draw = function () {
           };
           ov.setMap(this);
       };*/

    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: latlng,
        mapId: '46d5929e81efda3',
        disableDefaultUI: true,
    })

    new google.maps.Marker({
        position: latlng,
        map,
        title: "Mihai Tuta",
    });

    function map_recenter(latlng, offsetx, offsety) {
        var point1 = map.getProjection().fromLatLngToPoint(
            (latlng instanceof google.maps.LatLng) ? latlng : map.getCenter()
        );
        var point2 = new google.maps.Point(
            ((typeof (offsetx) == 'number' ? offsetx : 0) / Math.pow(2, map.getZoom())) || 0,
            ((typeof (offsety) == 'number' ? offsety : 0) / Math.pow(2, map.getZoom())) || 0
        );
        map.setCenter(map.getProjection().fromPointToLatLng(new google.maps.Point(
            point1.x - point2.x,
            point1.y + point2.y
        )));
    }

    google.maps.event.addListenerOnce(map, "projection_changed", function () {
        if (window.matchMedia("(min-width: 769px)").matches) {

            map_recenter(latlng, -330, 0);
        } else {
            map_recenter(latlng, -150, 0);
        }

        google.maps.event.addDomListener(window, 'resize', function () {
            if (window.matchMedia("(min-width: 769px)").matches) {
                map_recenter(latlng, -330, 0);
            } else {
                map_recenter(latlng, -150, 0);
            }
        })
    });


    /* if (window.matchMedia("(min-width: 769px)").matches) {
         map.setCenterWithOffset(latlng, 330, 0);
     } else {
         map.setCenterWithOffset(latlng, 150, 0);
     }

     google.maps.event.addDomListener(window, 'resize', function () {
         if (window.matchMedia("(min-width: 769px)").matches) {
             map.setCenterWithOffset(latlng, 330, 0);
         } else {
             map.setCenterWithOffset(latlng, 150, 0);
         }

     })*/

}
