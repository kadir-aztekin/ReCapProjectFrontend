import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { CardetailService } from './services/cardetail.service';

const routes: Routes = [
 {path:"",pathMatch:"full",component:CardetailComponent},
 {path:"brands",component:CardetailComponent},
 {path:"cardetails/brand/:brandId",component:CardetailComponent},
 {path:"colors",component:CardetailComponent},
 {path:"cardetails/color/:colorId",component:CardetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
