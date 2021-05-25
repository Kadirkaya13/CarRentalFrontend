import { Component, OnInit } from '@angular/core';
import {FormGroup ,FormBuilder,FormControl,Validator, Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car-image-add',
  templateUrl: './car-image-add.component.html',
  styleUrls: ['./car-image-add.component.css']
})
export class CarImageAddTempComponent implements OnInit {
  carImagesAddForm:FormGroup;

  constructor(private carImageService:CarImageService,private toastrService:ToastrService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createCarImageAddForm();
  }
  createCarImageAddForm(){
    this.carImagesAddForm=this.formBuilder.group({
      carId:["",Validators.required],
      imagePath:[""],
    })
  }

  add(){
    if(this.carImagesAddForm.valid){
      let carImageModel =Object.assign({},this.carImagesAddForm.value);
      this.carImageService.add(carImageModel).subscribe(response=>{
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
}