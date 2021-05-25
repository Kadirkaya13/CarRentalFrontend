import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { UserComponent } from './components/user/user.component';
import { NaviComponent } from './components/navi/navi.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarImageComponent } from './components/carImage/car-image/car-image.component';

import {ToastrModule} from "ngx-toastr";
import { BrandFilterPipe } from './pipes/brand-filter.pipe';
import { ColorFilterPipe } from './pipes/color-filter.pipe';
import { TableSelectionComponent } from './components/table-selection/table-selection.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { FilterPipe } from './pipes/filter.pipe';
import { CarAddComponent } from './components/car-add/car-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { AboutCompanyComponent } from './components/about-company/about-company.component';
import { CarImageAddComponent } from './components/car-image-add/car-image-add.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    ColorComponent,
    UserComponent,
    NaviComponent,
    RentalComponent,
    CarImageComponent,
    BrandFilterPipe,
    ColorFilterPipe,
    TableSelectionComponent,
    CreditCardComponent,
    FilterPipe,
    CarAddComponent,
    ColorAddComponent,
    BrandAddComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    CarDetailComponent,
    AboutCompanyComponent,
    CarImageAddComponent,
    FileUploadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
