import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car-service.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  
  cars:Car[]=[];
  currentCar:Car;
  dataLoaded=false;

  constructor(private carService:CarService,
    private activetedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activetedRoute.params.subscribe(params=>{
      if(params["colorId"]){
        this.getCarsByColor(params["colorId"]);
      }else if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }
      else{
        this.getCars();
      }
    })
  }
  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true;
    })
  }
  getCarsByColor(colorId:number){
    this.carService.getCarsByColorId(colorId).subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
    }) 
  }
  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrandId(brandId).subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
    }) 
  }
  setCurrentCar(car:Car){
    this.currentCar=car;
  }
  getCurrentCarClass(car:Car){
    if(car==this.currentCar){
      return "list-group-item active";
    }else{
      return "list-group-item";
    }
  }
}
