import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarComponent } from './components/car/car.component';

import { CardetailComponent } from './components/cardetail/cardetail.component';
import { CarimagesComponent } from './components/carimages/carimages.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guard/login.guard';
import { CardetailService } from './services/cardetail.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CarComponent },
  { path: 'brands', component: BrandComponent },
  { path: 'cardetails/brand/:brandId', component: CardetailComponent },
  { path: 'colors', component: CardetailComponent },
  { path: 'cardetails/color/:colorId', component: CardetailComponent },
  {path:"cars/detail/:carId",component:CarimagesComponent},
  {path:"cars/add",component:CarAddComponent,canActivate:[LoginGuard]},
  {path:"colors/add",component:ColorAddComponent,canActivate:[LoginGuard]},
  {path:"brands/add",component:BrandAddComponent,canActivate:[LoginGuard]},
  { path: 'cars/filter/:brandId/:colorId', component: CarComponent },
  {path:"login",component:LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
