import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Result2PageRoutingModule } from './result2-routing.module';

import { Result2Page } from './result2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Result2PageRoutingModule
  ],
  declarations: [Result2Page]
})
export class Result2PageModule {}
