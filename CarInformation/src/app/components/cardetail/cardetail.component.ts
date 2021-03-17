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
  constructor(private cardetailService:CardetailService ,private activetedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.activetedRoute.params.subscribe(params=>{
      if(params["colorId"]){
        this.getCarDetailByColor(params["colorId"])
      }else if(params["brandId"]){
        this.getCarDetailByBrandId(params["brandId"]) }
        else{
        this.getCarDetails();
      }
    })
    

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
}
