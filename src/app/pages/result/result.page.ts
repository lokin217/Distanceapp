import { Component, OnInit, ViewChild, ElementRef, NgZone} from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { IonInput } from '@ionic/angular';
import {
  GoogleMap,
  MapInfoWindow,
  MapGeocoder,
  MapGeocoderResponse,
} from '@angular/google-maps';
import {Platform} from '@ionic/angular';

declare var google: any;

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {

  @ViewChild('autocomplete') autocomplete: IonInput;
  @ViewChild('search') public searchElementRef!: ElementRef;

  map:any;

  constructor(
    private geo: Geolocation,
    private router: Router,
    private ngZone: NgZone, 
    private geoCoder: MapGeocoder,
    public platofrm: Platform,
  ) { 
    this.platofrm.ready().then(()=>{
      this.DistanceCalculation();
    })
  }

  gotoresult2(){
    console.log('hello world')
     //this.router.navigateByUrl('/result2')
    //this.router.navigate(['/result2'])
  }

  FindingDistance(){

    const service = new google.maps.DistanceMatrixService(); // instantiate Distance Matrix service
      const matrixOptions = {
        origins: ["Delft"], // technician locations
        destinations: ["Rotterdam"], // customer address
        travelMode: 'DRIVING',
        unitSystem: google.maps.UnitSystem.IMPERIAL
      };
      // Call Distance Matrix service
      service.getDistanceMatrix(matrixOptions, callback);

      // Callback function used to process Distance Matrix response
      function callback(response, status) {
        // if (status !== "OK") {
        //   alert("Error with distance matrix");
        //   return;
        // }
        console.log(response);        
      }

    // const service = new google.maps.DistanceMatrixService();

    //   // build request
    // const origin1 = { lat: 55.93, lng: -3.118 };
    // const origin2 = "Greenwich, England";
    // const destinationA = "Stockholm, Sweden";
    // const destinationB = { lat: 50.087, lng: 14.421 };

    // const request = {
    //   origins: [origin1, origin2],
    //   destinations: [destinationA, destinationB],
    //   travelMode: google.maps.TravelMode.DRIVING,
    //   unitSystem: google.maps.UnitSystem.METRIC,
    //   avoidHighways: false,
    //   avoidTolls: false,
    // };

    // console.log(service.getDistanceMatrix(request).then((response) => {
    //   // put response
    //   (document.getElementById("response") as HTMLDivElement).innerText =
    //     JSON.stringify(response, null, 2)})

    // )

    //   // put request on page
    // (document.getElementById("request") as HTMLDivElement).innerText =
    // JSON.stringify(request, null, 2);

  //     // get distance matrix response
  //   service.getDistanceMatrix(request).then((response) => {
  //   // put response
  //   (document.getElementById("response") as HTMLDivElement).innerText =
  //     JSON.stringify(response, null, 2);
  };

  DistanceCalculation(){
    console.log(
      ('the distance is')
    )
    // var gps1 = new google.maps.LatLng(52.012093,4.360011)
    // var gps2 = new google.maps.LatLng(52.069721,4.322500)
    // var distanceinmeter = google.maps.geometry.spherical.computeDistanceBetween(gps1,gps2);
    // alert(distanceinmeter);
  }

  ionViewDidEnter(){
    this.geo.getCurrentPosition().then((res)=>{
      this.map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: res.coords.latitude, lng: res.coords.longitude },
        zoom: 10,
      });

      const marker = new google.maps.Marker({
        position: {
          lat:res.coords.latitude, lng: res.coords.longitude},
        map: this.map,
      });

    }).catch(e=>{
      console.log(e);
    })

    // this.autocomplete.getInputElement().then((ref: any) => {
    //   const autocomplete = new google.maps.places.Autocomplete(ref);
    //   autocomplete.addListener('Location1', ()=>{
    //     console.log(autocomplete.getPlace());
    //   })
    // })
    
  }

  // ngAfterViewInit(): void {
  //   // Binding autocomplete to search input control
  //   let autocomplete = new google.maps.places.Autocomplete(
  //     this.searchElementRef.nativeElement
  //   );

  //   autocomplete.addListener('place_changed', () => {
  //     this.ngZone.run(() => {
  //       //get the place result
  //       let place: google.maps.places.PlaceResult = autocomplete.getPlace();

  //     });
  //   });
  // }


  ngOnInit() {
  }



}
