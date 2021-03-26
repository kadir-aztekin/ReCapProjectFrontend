import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/cardetail';
import { ListResponseModel } from '../models/listResponseModel';
import {Car} from "../models/car"
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl="https://localhost:44350/api/"
  constructor(private httpClient:HttpClient) { }

  getCarDetails():Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl +  "cars/getcardetails"

    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }
  getCarById(carId:number):Observable<SingleResponseModel<CarDetail>>{
    let newPath = this.apiUrl+"cars/getcarbyid?carId="+carId;
     return this.httpClient.get<SingleResponseModel<CarDetail>>(newPath);
  }
  getCarDetailByColor(colorId:number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl +  "cars/getcolorid?colorId="+colorId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarDetailByBrandId(brandId:number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl +  "cars/getbrandId?brandid="+brandId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarsByFilter(colorId:number,brandId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getcarsbyfilter?colorId="+colorId+"&brandId="+brandId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  
  add(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"cars/add",car)

  }
}