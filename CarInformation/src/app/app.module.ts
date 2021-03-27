import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorComponent } from './components/color/color.component';
import { NaviComponent } from './components/navi/navi.component';
import { BrandComponent } from './components/brand/brand.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { CarimagesComponent } from './components/carimages/carimages.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { CarFilterPipe } from './pipes/car-filter.pipe';
import { CarAddComponent } from './components/car-add/car-add.component';

import {ToastrModule} from "ngx-toastr";
import { ColorAddComponent } from './components/color-add/color-add.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { CarComponent } from './components/car/car.component';
import { CarFilterComponent } from './components/car/car-filter/car-filter.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    NaviComponent,
    BrandComponent,
    CustomerComponent,
    RentalComponent,
    CardetailComponent,
    
    CarimagesComponent,
    FilterPipePipe,
    CarFilterPipe,
    CarAddComponent,
    ColorAddComponent,
    BrandAddComponent,
    CarComponent,
    CarFilterComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
