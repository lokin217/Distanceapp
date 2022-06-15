import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

declare var google: any;

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {
  // distance: any = [
  //   {distance}

  // ];
  map:any;

  constructor(
    private geo: Geolocation,
    private router: Router
  ) { }

  gotoresult2(){
    // this.router.navigateByUrl('/result2')
    this.router.navigate(['/result2'])
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
    
  }
  ngOnInit() {
  }

}
