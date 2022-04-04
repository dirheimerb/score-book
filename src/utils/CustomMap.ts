export interface Mappable {
  location: {
    lat: number;
    lng: number;
    Map: google.maps.Map;
    StreetViewPanorama: String;
   // map: Map = google.maps.Map;
  },
  markerContent(): string;
  color: string;
}

export class CustomMap {
 // Map = google.maps.Map; StreetViewPanorama:String;
 // map: Map | StreetViewPanorama;
  google: any;
  constructor(/*map: google.maps.Map, center: google.maps.LatLngAltitudeLiteral**/) {
  let map: google.maps.Map;
  const center: google.maps.LatLngAltitudeLiteral = {
    lat: 30, lng: -110,
    altitude: 0
  };

  function initMap():void {
    map = new google.maps.Map(document.getElementById("map")as HTMLElement, {
      center,
      zoom: 8
    })
  }
  /* private googleMap; google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      center: { lat: 0, lng: 0 },
      zoom: 1 */
    }

  addMarker (mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.google.maps.Map,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      }
    });

    marker.addListener('click', () => {
      const infoWindow = new this.google.maps.infoWindow({
        content: mappable.markerContent()
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
  googleMap(googleMap: any, marker: google.maps.Marker) {
    throw new Error("Method not implemented.");
  }
}
