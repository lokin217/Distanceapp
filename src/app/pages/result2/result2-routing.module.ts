import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Result2Page } from './result2.page';

const routes: Routes = [
  {
    path: '',
    component: Result2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Result2PageRoutingModule {}
