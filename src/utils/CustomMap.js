"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomMap = void 0;
var CustomMap = /** @class */ (function () {
    function CustomMap( /*map: google.maps.Map, center: google.maps.LatLngAltitudeLiteral**/) {
        this.Map = google.maps.Map;
        var map;
        var center = {
            lat: 30, lng: -110,
            altitude: 0
        };
        function initMap() {
            map = new google.maps.Map(document.getElementById("map"), {
                center: center,
                zoom: 8
            });
        }
        /* private googleMap; google.maps.Map;
      
        constructor(divId: string) {
          this.googleMap = new google.maps.Map(document.getElementById(divId), {
            center: { lat: 0, lng: 0 },
            zoom: 1 */
    }
    CustomMap.prototype.addMarker = function (mappable) {
        var _this = this;
        var marker = new google.maps.Marker({
            map: this.map,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng,
            }
        });
        marker.addListener('click', function () {
            var infoWindow = new _this.google.maps.infoWindow({
                content: mappable.markerContent()
            });
            infoWindow.open(_this.googleMap, marker);
        });
    };
    CustomMap.prototype.googleMap = function (googleMap, marker) {
        throw new Error("Method not implemented.");
    };
    return CustomMap;
}());
exports.CustomMap = CustomMap;
