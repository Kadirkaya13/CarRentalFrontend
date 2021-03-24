import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  filterText="";
  imageBasePath="https://localhost:44372/api/" 

  constructor(private carService:CarService,
    private activetedRoute:ActivatedRoute,
    private toastrService:ToastrService) { }

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
  getCarsByfilter(colorId:number,brandId:number){
    this.carService.getCarsByBrandAndColor(brandId,colorId).subscribe(response=>{
      this.cars=response.data,
      this.dataLoaded=true;
      if (this.cars.length=0) {
        this.toastrService.info("Aradınız bilgilerle eşleşen sonuç bulunamadı")
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
