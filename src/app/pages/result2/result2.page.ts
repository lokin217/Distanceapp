import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
//import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-result2',
  templateUrl: './result2.page.html',
  styleUrls: ['./result2.page.scss'],
})
export class Result2Page implements OnInit {
  map:any;
  distVal;

  constructor(
    private geo: Geolocation,
    private router: Router,
    private route:ActivatedRoute
  ) {
    this.router.routerState.root.queryParams.subscribe(params => {      // receiving the value of distance
      if (this.router.getCurrentNavigation().extras.state) {

        this.distVal = this.router.getCurrentNavigation().extras.state.x; 
        //console.log('got from other page: '+this.router.getCurrentNavigation().extras.state.x)
      }
    });
  }

  ngOnInit() {
  }

}
