import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';

import { CardetailComponent } from './components/cardetail/cardetail.component';
import { CarimagesComponent } from './components/carimages/carimages.component';
import { CarsComponent } from './components/cars/cars.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
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
  {path:"cars",component:CarsComponent},
  {path:"cars/add",component:CarAddComponent},
  {path:"colors/add",component:ColorAddComponent},
  {path:"brands/add",component:BrandAddComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
