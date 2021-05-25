import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-company',
  templateUrl: './about-company.component.html',
  styleUrls: ['./about-company.component.css']
})
export class AboutCompanyComponent implements OnInit {

  whoAreWe:string ="Araç kiralamayı insanlar için çok kolay ve rahat bir hale getirmeye çalışan ve bunun için"+ 
  "elimizden gelinin en iyisini yapmayan çalışan bir takımız umarız hizmetlerimizden memnun kalırsınız";
  aboutCars:string ="Araçları görebilir isteğinize en uygun aracı seçip kiralayabilirsiniz";
  constructor() { }

  ngOnInit(): void {
  }

}
