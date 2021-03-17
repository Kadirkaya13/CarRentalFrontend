import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarImage } from '../models/carImage';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl = 'https://localhost:44372/api/';

  constructor(private httpClient: HttpClient) { }

  getByCarId(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath =this.apiUrl+"carImages/getbycarid?carId="+carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
  getImages():Observable<ListResponseModel<CarImage>> {
    let newPath =this.apiUrl+"carImages/getall";
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
}
