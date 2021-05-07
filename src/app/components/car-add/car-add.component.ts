import { Component, OnInit } from '@angular/core';
import {FormGroup ,FormBuilder,FormControl,Validator, Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car-service.service';
import { CardService } from 'src/app/services/card.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  carAddForm:FormGroup;
  currentCar:Car;
  colors:Color[]=[]
  brands:Brand[]=[]
  dataLoaded=false;

  constructor(private formBuilder:FormBuilder,
    private carService:CarService,
    private toastrService:ToastrService,
    private colorService:ColorService,
    private brandService:BrandService) { }

  ngOnInit(): void {
    this.createCarAddForm();
    this.getColors();
    this.getBrands();
  }
  createCarAddForm(){
    this.carAddForm=this.formBuilder.group({
      brandName:["",Validators.required],
      colorName:["",Validators.required],
      carName:["",Validators.required],
      modelYear:["",Validators.required],
      dailyPrice:["",Validators.required],
      description:["",Validators.required],
      findeksNote:["",Validators.required],
    })
  }
  add(){
    if(this.carAddForm.valid){
      let carModel =Object.assign({},this.carAddForm.value);
      this.carService.add(carModel).subscribe(response=>{
        console.log(response);
        this.toastrService.success(response.message,"Başarılı!")
      },responseError=>{
        if(responseError.error.Errors.length>0)
        {
          console.log(responseError.error.Errors)
          for (let i = 0; i <responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama hatası")
          }
        }
      })
    }else{
      this.toastrService.error("Formunuz eksik","Dikkat!")
    }
  }


  getColors() {
    this.colorService.getColors().subscribe(response=>{
      this.colors = response.data
      this.dataLoaded = true;
    })
  }
  getBrands() {
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data;
      this.dataLoaded = true;
    })
  }
}
