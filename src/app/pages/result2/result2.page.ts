import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';


@Component({
  selector: 'app-result2',
  templateUrl: './result2.page.html',
  styleUrls: ['./result2.page.scss'],
})
export class Result2Page implements OnInit {
  map:any;

  constructor(
    private geo: Geolocation,
    private router: Router
  ) { }

  // ionViewDidEnter(){
  //   this.geo.getCurrentPosition().then((res)=>{
  //     this.map = new google.maps.Map(document.getElementById("map"), {
  //       center: { lat: res.coords.latitude, lng: res.coords.longitude },
  //       zoom: 10,
  //     });


  //   }).catch(e=>{
  //     console.log(e);
  //   })
    
  // } 


  ngOnInit() {
  }

}
