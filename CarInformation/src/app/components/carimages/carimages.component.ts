import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carimage } from 'src/app/models/carImage';
import { CarimageService } from 'src/app/services/carimage.service';

@Component({
  selector: 'app-carimages',
  templateUrl: './carimages.component.html',
  styleUrls: ['./carimages.component.css']
})
export class CarimagesComponent implements OnInit {
  carimages:Carimage[]=[];
  currenCarImage:Carimage;

  constructor(private carimageService:CarimageService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarImagesByCarId(params["carId"])
      }else {
        
      }
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
