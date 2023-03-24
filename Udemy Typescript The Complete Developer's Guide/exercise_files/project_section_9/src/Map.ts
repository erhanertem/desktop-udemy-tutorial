export interface addableMarker {
  location: { lat: number; lng: number };
  markerContent(): string;
  color: string;
}

export class CustomMap {
  private googleMap: google.maps.Map;
  constructor(public id: string, public zoomScale: number) {
    this.googleMap = new google.maps.Map(
      document.getElementById(id) as HTMLElement,
      {
        zoom: zoomScale,
        center: { lat: 0, lng: 0 },
      }
    );
  }
  addMarker(el: addableMarker): void {
    const marker = new google.maps.Marker({
      position: {
        lat: el.location.lat,
        lng: el.location.lng,
      },
      map: this.googleMap,
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: el.markerContent(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
