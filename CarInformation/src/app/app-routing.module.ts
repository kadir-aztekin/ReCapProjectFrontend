import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardetailComponent } from './components/cardetail/cardetail.component';
import { CarimagesComponent } from './components/carimages/carimages.component';
import { CardetailService } from './services/cardetail.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CardetailComponent },
  { path: 'brands', component: CardetailComponent },
  { path: 'cardetails/brand/:brandId', component: CardetailComponent },
  { path: 'colors', component: CardetailComponent },
  { path: 'cardetails/color/:colorId', component: CardetailComponent },
  {path:"carimages/car/:carId",component:CarimagesComponent},
  {path:"cardetails/color/:colorId/carimages/car/:carId",component:CarimagesComponent},
  {path:"cardetails/brand/:brandId/carimages/car/:carId",component:CarimagesComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
