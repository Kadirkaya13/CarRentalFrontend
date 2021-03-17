import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';


@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css']
})
export class CarImageComponent implements OnInit {
  carImages :CarImage[] =[];
  dataLoaded=false;
  imageApiUrl="https://localhost:44372/Images"
  constructor(private carImageService : CarImageService ,
    private activetedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activetedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getByCar(params["carId"])
      }else{
        this.getImages();
      }
    })
  }
  getImages(){
    this.carImageService.getImages().subscribe(response=>{
      this.carImages = response.data
      this.dataLoaded = true;
    })
  }
  getByCar(carId:number){
    this.carImageService.getByCarId(carId).subscribe(response=>{
      this.carImages=response.data
      this.dataLoaded=true;
    }) 
  }

}
