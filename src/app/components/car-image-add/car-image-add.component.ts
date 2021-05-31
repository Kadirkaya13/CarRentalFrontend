import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {Car} from "../../models/car";
import { CarService } from 'src/app/services/car-service.service';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car-image-add',
  templateUrl: './car-image-add.component.html',
  styleUrls: ['./car-image-add.component.css']
})
export class CarImageAddComponent implements OnInit {
  imageAddForm:FormGroup;
  productFilter: Number;
  cars:Car[]=[];
  selectedFile : File = null;

  constructor(private carService:CarService,
              private formBuilder:FormBuilder,
              private toastrService:ToastrService,
              private carImageService:CarImageService) { }

  ngOnInit(): void {
    this.load();
  }

  load(){
    this.getCarList();
    this.createImageAddForm();
  }

  createImageAddForm() {
    this.imageAddForm = this.formBuilder.group({
      carId: ['',Validators.required],
      file: [null],
    });
  }

  getCarList(){
    this.carService.getCars().subscribe(response=>{
      this.cars = response.data
      console.log(response.data);
    })
  }

  uploadFile(event:any) {
    const carImage = (event.target as HTMLInputElement).files[0];
    this.imageAddForm.patchValue({
      file: carImage
    });
    this.imageAddForm.get('file').updateValueAndValidity()
  }


  submitForm() {
    if(this.imageAddForm.valid){
      var formData: any = new FormData();
      formData.append("file", this.imageAddForm.get('file').value);
      formData.append("carId", this.imageAddForm.get('carId').value);
      console.log(formData);
      this.carImageService.add(formData).subscribe(response=>{
        this.toastrService.success(response.message);
      },error=>{
        this.toastrService.error(error.error.message);
      })
    }else{
      this.toastrService.error('Form Bilgileriniz Eksik');
    }
  }

  getSelectedProduct(carId: Number) {
    if (this.productFilter == carId)
      return true;
    else
      return false;
  }
}