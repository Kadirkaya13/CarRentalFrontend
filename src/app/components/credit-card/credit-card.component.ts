import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Card } from 'src/app/models/card';
import { Rental } from 'src/app/models/rental';
import { CardService } from 'src/app/services/card.service';
import { RentalService } from 'src/app/services/rental-service.service';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {

  rental:Rental;
  nameOnTheCard:string;
  cardNumber:string;
  cardCvv:string;
  card:Card;
  cardExist:Boolean = false;
  constructor(
    private activatedRoute:ActivatedRoute,
    private cardService:CardService,
    private rentalService:RentalService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["rental"]){
        this.rental = JSON.parse(params['rental']);
      }
    })
  }

  async rentACar(){
    let card:Card = {nameOnTheCard:this.nameOnTheCard,cardNumber:this.cardNumber,cardCvv:this.cardCvv}
    this.cardExist = await this.isCardExist(card)
    if(this.cardExist){
      this.card = await((this.getCardByCardNumber(this.cardNumber))) 
      this.rentalService.addRental(this.rental)
      this.toastrService.success("Arabayı kiraladınız","Işlem başarılı")
    }else{
      this.toastrService.error("Bankanız bilgilerinizi onaylamadı","Kart bulunamadı")
    }
  }

  async isCardExist(Card:Card){
    return (await this.cardService.isCardExist(Card).toPromise()).success
  }

  async getCardByCardNumber(cardNumber:string){
    return (await (this.cardService.getCardByNumber(cardNumber)).toPromise()).data[0]
  }

  

}
