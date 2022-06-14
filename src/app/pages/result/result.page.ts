import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

declare var google: any;

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {
  map:any;

  constructor(
    private geo: Geolocation
  ) { }

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
