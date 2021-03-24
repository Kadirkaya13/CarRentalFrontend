import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarComponent } from './components/car/car.component';
import { CarImageComponent } from './components/carImage/car-image/car-image.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/color/:colorId",component:CarComponent},
  {path:"cars/brand/:brandId",component:CarComponent},
  {path:"carImages/car/:carId",component:CarImageComponent},
  {path:"cars/filter/:brandId/:colorId",component:CarImageComponent},
  {path:"rental/:carId", component:RentalComponent},
  {path:"cars/:carId", component:CarComponent},
  {path:"creditcard/rental", component:CreditCardComponent},
  {path:"car/add",component:CarAddComponent},
  {path:"color/add",component:ColorAddComponent},
  {path:"brand/add",component:BrandAddComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
