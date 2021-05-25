import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  isLogin=false;
  constructor(private authService:AuthService) {}

  ngOnInit(): void {
    this.isLoggedIn()
  }
  isLoggedIn(){
    if (this.authService.isAuthenticated()){
      return true;
    }else{
      return false;
    }
  }
}
