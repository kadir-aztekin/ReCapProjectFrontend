import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/cardetail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl ="https://localhost:44350/api/"
  filterText='';

  constructor(private httpClient: HttpClient) {}

  getCarWithFilter(brandId?: number,colorId?: number): Observable<ListResponseModel<CarDetail>> {

    let newPath = this.apiUrl + 'cars/GetWithFilter?';

    if (brandId !== undefined) { newPath += 'brandId=' + brandId + '&';}
    if (colorId !== undefined) {newPath += 'colorId=' + colorId + '&';}
    if (status !== undefined) {newPath += 'status=' + status + '&';}

    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
}