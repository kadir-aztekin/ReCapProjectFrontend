import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carimage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarimageService {
apiUrl="https://localhost:44350/api/"
  constructor(private httpClient:HttpClient) { }
  getCarimages():Observable<ListResponseModel<Carimage>>{
    let newPath=this.apiUrl+"carimages/getall"
    return this.httpClient.get<ListResponseModel<Carimage>>(newPath);
  }
  getCarimagesByCarId(carId:number):Observable<ListResponseModel<Carimage>>{
    let newPath=this.apiUrl+"carimages/getbycarid?carid="+carId
    return this.httpClient.get<ListResponseModel<Carimage>>(newPath)
  }
}