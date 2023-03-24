export class CustomMap {
  private googleMap: google.maps.Map;
  constructor(public id: string, public zoom: number) {
    this.googleMap = new google.maps.Map(
      document.getElementById(id) as HTMLElement,
      {
        zoom: zoom,
        center: { lat: 0, lng: 0 },
      }
    );
    // this.initMap();
  }
  // private initMap() {
  //   new google.maps.Map(document.getElementById('map') as HTMLElement, {
  //     zoom: 1,
  //     center: { lat: 0, lng: 0 },
  //   });
  // }
}
