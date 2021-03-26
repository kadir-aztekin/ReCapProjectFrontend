import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/cardetail';
import { Carimage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/car.service';
import { CarimageService } from 'src/app/services/carimage.service';

@Component({
  selector: 'app-carimages',
  templateUrl: './carimages.component.html',
  styleUrls: ['./carimages.component.css']
})
export class CarimagesComponent implements OnInit {
  carimages:Carimage[]=[];
  cardetail:CarDetail
  currenCarImage:Carimage;

  constructor(private carimageService:CarimageService, private carService:CarService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarImagesByCarId(params["carId"])
        this.getCarById(params["carId"]);
      }else {
        
      }
    })
  }
  getCarById(carId:number){
    this.carService.getCarById(carId).subscribe((response)=>{
      this.cardetail = response.data;
    })
  }
  getCarimages(){
    this.carimageService.getCarimages().subscribe(response=>{
      this.carimages=response.data
    })
  }
  getCarImagesByCarId(carId:number){
    this.carimageService.getCarimagesByCarId(carId).subscribe(response=>{
      this.carimages=response.data
    })
  }
  setCurrentCarImage(carimage:Carimage){
    this.currenCarImage=carimage;
  }
  
}
