import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/cardetail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CardetailService {
apiUrl="https://localhost:44350/api/"
  constructor(private httpClient:HttpClient) { }

  getCarDetails():Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl +  "cars/getcardetails"

    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }
  getCarDetailByColor(colorId:number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl +  "cars/getcolorid?colorId="+colorId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarDetailByBrandId(brandId:number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl +  "cars/getbrandId?brandid="+brandId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }


}
