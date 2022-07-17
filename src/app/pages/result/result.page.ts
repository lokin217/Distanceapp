import { Component, OnInit, ViewChild, ElementRef, NgZone} from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
//import { IonInput } from '@ionic/angular';
import {
  GoogleMap,
  MapInfoWindow,
  MapGeocoder,
  MapGeocoderResponse,
} from '@angular/google-maps';
import {Platform} from '@ionic/angular';
//import { Capabilities } from 'protractor';

declare var google: any;

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {
//declaring the variables, the user inputs from the html page
  input1;
  input2;


  //@ViewChild('autocomplete') autocomplete: IonInput;
  //@ViewChild('search') public searchElementRef!: ElementRef;

  map:any;

  constructor(
    private geo: Geolocation,
    private router: Router,
    //private ngZone: NgZone, 
    //private geoCoder: MapGeocoder,
    public platofrm: Platform,
  ) { 
    this.platofrm.ready().then(()=>{
      this.DistanceCalculation();
    })
  }


  FindingDistance(){

    const service = new google.maps.DistanceMatrixService(); // Distance Matrix service
      const matrixOptions = {
        origins: [this.input1], // location 1
        destinations: [this.input2], // location 2
        travelMode: 'DRIVING',
        unitSystem: google.maps.UnitSystem.IMPERIAL
      };
      // Call Distance Matrix service
      //service.getDistanceMatrix(matrixOptions, callback);        // callback functions were used earlier and caused problems and hence 'then is used to recieve api calls

      service.getDistanceMatrix(matrixOptions)
      .then((response) => {

        console.log(response.rows[0].elements[0].distance.text);    // the value of the distance apprears in the console log
        const dist = response.rows[0].elements[0].distance.text;    // constant dist does not change, the same value will remain throughout the operation
        let navigationExtras: NavigationExtras = {                  // state holds the value belonging to the current component
          state: {
            x : dist

          }
        };

        this.router.navigate(['/result2'], navigationExtras);        //takes this object value to the next page of result2
      })


  };

   
  // another method of calculating distance, not included in main code
  DistanceCalculation(){}

  
  //this following part loads the current position using a marker on a map to show geo position
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
    
  }

  ngOnInit() {
  }

}
