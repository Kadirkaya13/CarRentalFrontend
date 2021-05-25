import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutCompanyComponent } from './components/about-company/about-company.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarImageAddComponent } from './components/car-image-add/car-image-add.component';
import { CarComponent } from './components/car/car.component';
import { CarImageComponent } from './components/carImage/car-image/car-image.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RentalComponent } from './components/rental/rental.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/color/:colorId",component:CarComponent},
  {path:"cars/brand/:brandId",component:CarComponent},
  {path:"carImages/car/:carId",component:CarImageComponent},
  {path:"cars/filter/:brandId/:colorId",component:CarImageComponent},
  {path:"rental/:carId", component:RentalComponent},
  {path:"cars/:carId", component:CarComponent},
  {path:"creditcard/rental", component:CreditCardComponent,canActivate:[LoginGuard]},
  {path:"car/add",component:CarAddComponent,canActivate:[LoginGuard]},
  {path:"color/add",component:ColorAddComponent,canActivate:[LoginGuard]},
  {path:"brand/add",component:BrandAddComponent,canActivate:[LoginGuard]},
  {path:"carImage/add",component:CarImageAddComponent,canActivate:[LoginGuard]},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"cars/carDetail/:carId",component:CarDetailComponent},
  {path:"about/company",component:AboutCompanyComponent},
  {path:"fileupload",component:FileUploadComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
