import { HttpClient,HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup ,FormBuilder,FormControl,Validator, Validators} from "@angular/forms"
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car-image-add',
  templateUrl: './car-image-add.component.html',
  styleUrls: ['./car-image-add.component.css']
})
export class CarImageAddComponent implements OnInit {
  selectedFile:File=null;
  constructor(private httpClient:HttpClient,private formBuilder:FormBuilder,private carSevice:CarService,
    private carImageService:CarImageService,private toastrService:ToastrService,private activetedRoute:ActivatedRoute) { }
  carImage:CarImage;
  imageAddForm:FormGroup;
  carId?:number;

  ngOnInit(): void {
    this.createCarImageAddForm();
    this.activetedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.carId=parseInt(params["carId"]);
      }
    })
  }

  onFileSelected(event:any){
    this.selectedFile=<File>event.target.files[0];
    this.carImage.carId=event.target.value;
  }

  createCarImageAddForm(){
    this.imageAddForm=this.formBuilder.group({
      carId:["",Validators.required],
      ımage:["",Validators.required ]
    })
  }
  
  onUpload(){
    const formData = new FormData().append("image",this.selectedFile,this.selectedFile.name);
    this.httpClient.post(environment.apiUrl+"carImages/add",formData,{
      reportProgress:true,
      observe:"events"
    }).subscribe(event=>{
      if (event.type== HttpEventType.UploadProgress) {
        console.log("upload progress: " +Math.round(event.loaded/event.total*100)+"%")
      }else if(event.type === HttpEventType.Response){
        console.log(event)
      }
      
    });
  }
  add(){
    if(this.imageAddForm.valid){
      let brandModel =Object.assign({},this.imageAddForm.value);
      this.carImageService.add(brandModel).subscribe(response=>{
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
