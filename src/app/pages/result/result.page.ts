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
    private geoCoder: MapGeocoder
  ) { }

  gotoresult2(){
    console.log('hello world')
     //this.router.navigateByUrl('/result2')
    //this.router.navigate(['/result2'])
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
