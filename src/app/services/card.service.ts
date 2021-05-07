import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Card } from '../models/card';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CardService {


  constructor(private httpClient: HttpClient) { }


  isCardExist(card:Card):Observable<ResponseModel>{
    let newPath = environment.apiUrl + "fakecards/iscardexist"
    return this.httpClient.post<ResponseModel>(newPath,card);
  }

  getCardByNumber(cardNumber:string):Observable<ListResponseModel<Card>>{
    let newPath = environment.apiUrl + "cards/getbycardnumber?cardnumber=" + cardNumber
    return this.httpClient.get<ListResponseModel<Card>>(newPath);
  }

  updateCard(Card:Card){
    let newPath = environment.apiUrl + "fakecards/update"
    this.httpClient.put(newPath,Card)
  }
}
