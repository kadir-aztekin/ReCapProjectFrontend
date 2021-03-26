import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/cardetail';
import { CarService } from 'src/app/services/car.service';
import { CardetailService } from 'src/app/services/cardetail.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cardetails: CarDetail[] = [];
  cardetail:CarDetail
  dataLoaded = false;
  filterText = '';
  constructor(
    private cardetailService: CardetailService,
    private carService:CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCarsByFiltered();
    
  }
  getCarById(carId:number){
    this.carService.getCarById(carId).subscribe((response)=>{
      this.cardetail = response.data;
      this.dataLoaded = true;
    })
  }
  getCarDetails() {
    this.cardetailService.getCarDetails().subscribe((response) => {
      this.cardetails = response.data;
      this.dataLoaded = true;
    });
  }
  getCarDetailByColor(colorId: number) {
    this.cardetailService.getCarDetailByColor(colorId).subscribe((response) => {
      this.cardetails = response.data;
      this.dataLoaded = true;
    });
  }
  getCarDetailByBrandId(brandId: number) {
    this.cardetailService
      .getCarDetailByBrandId(brandId)
      .subscribe((response) => {
        this.cardetails = response.data;
        this.dataLoaded = true;
      });
  }
  getCarsByFiltered() {
    this.activatedRoute.params.subscribe((param) => {
      if (param['brandId'] > 0 && param['colorId'] == 0) {
        return this.getCarDetailByBrandId(param['brandId']);
      } else if (param['colorId'] > 0 && param['brandId'] == 0) {
        return this.getCarDetailByColor(param['colorId']);
      } else if (param['brandId'] > 0 && param['colorId'] > 0) {
        return this.getCarsByBrandIdAndColorId(
          param['brandId'],
          param['colorId']
        );
      }

      return this.getCarDetails();
    });
  }
  getCarsByBrandIdAndColorId(brandId: number, colorId: number) {
    this.cardetailService
      .getCarDetailByBrandId(brandId)
      .subscribe((response) => {
        this.cardetails = response.data.filter(
          (carDetail: CarDetail) => carDetail.colorId == colorId
        );
      });
  }
}
