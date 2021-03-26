import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/cardetail';
import { CardetailService } from 'src/app/services/cardetail.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {
cardetails:CarDetail[]=[];
dataLoaded=false;
filterText="";
  constructor(private cardetailService:CardetailService ,private activetedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.activetedRoute.params.subscribe((param) => {
     if(param['colorId']&&param['brandId']){
        this.getCarsByFilter(param['colorId'],param['brandId']);
      } else if (param['colorId']) {
        this.getCarDetailByColor(param['colorId'])
      }else  if (param['brandId'])  {
        this.getCarDetailByBrandId(param['brandId']);
      }
       else {
        this.getCarDetails();
      }
    });
  }
  getCarDetails(){
    this.cardetailService.getCarDetails().subscribe(response =>{
      this.cardetails = response.data
      this.dataLoaded=true;
    })
  }
  getCarDetailByColor(colorId:number){
    this.cardetailService.getCarDetailByColor(colorId).subscribe(response =>{
      this.cardetails = response.data
      this.dataLoaded=true;
  })
  }
  getCarDetailByBrandId(brandId:number){
    this.cardetailService.getCarDetailByBrandId(brandId).subscribe(response =>{
      this.cardetails = response.data
      this.dataLoaded=true;
  })
  }
  getCarsByFilter(colorId:number,brandId:number){
    this.cardetailService.getCarsByFilter(colorId,brandId).subscribe(response=>{
      this.cardetails=response.data;
      this.dataLoaded=true;
    })
  }
}
