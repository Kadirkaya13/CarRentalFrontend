import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-table-selection',
  templateUrl: './table-selection.component.html',
  styleUrls: ['./table-selection.component.css']
})
export class TableSelectionComponent implements OnInit {

  colors:Color[]=[];
  brands:Brand[]=[];

  dataLoaded=false;

  selectedColor:number;
  selectedBrand:number;

  constructor(private colorService:ColorService,
    private brandService:BrandService) { }

  ngOnInit(): void {
    this.getColor();
    this.getBrand();
  }
 
  
  getColor(){
    this.colorService.getColors().subscribe(response=>{
      this.colors = response.data
      this.dataLoaded = true;
    })
  }
  getBrand(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data
      this.dataLoaded = true;
    })
  }
  getSelectedColor(colorId:number){
    if (this.selectedColor==colorId) {
      return true;
    }else{
      return false;
    }
  }
  getSelectedBrand(brandId:number){
    if (this.selectedBrand==brandId) {
      return true;
    }else{
      return false;
    }
  }
}
