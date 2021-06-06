import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car-service.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  currentCar:Car;
  carImages:CarImage[];
  dataLoaded=false;
  imageBasePath="https://kadirarackiralama.website/Images/" 
  
  constructor(
    private carService:CarService,
    private carImageService:CarImageService, 
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarImages(params["carId"])
        this.getCarDetail(params["carId"])
      }
    })
  }

  getCarDetail(carId:number){
    this.carService.getCarDetail(carId).subscribe(response => {
      let items=response.data
      this.currentCar=items.find(x=>x.carId==carId);
      this.dataLoaded=true;
    })
  }

  getCarImages(carId:number){
    this.carImageService.getCarImages(carId).subscribe(response => {
      this.carImages=response.data
      this.dataLoaded=true;
      console.log(response.data)
    })
  }
}
