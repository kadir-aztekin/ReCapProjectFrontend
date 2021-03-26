import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/cardetail';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent implements OnInit {
  carDetails: CarDetail[] = [];
  filterText='';
  dataLoaded = false;

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe((params) => {
      this.getCarWithFilter(params['brandId'],params['colorId']);
    });
    
  }
  

  getCarWithFilter(brandId?: number, colorId?: number) {
    this.carService.getCarWithFilter(brandId, colorId).subscribe((response) => {
        this.carDetails = response.data;
      });
  }
}