import { Component, OnInit } from '@angular/core';
import { JwtloginService } from '../services/jwtlogin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public login:JwtloginService) { }

  ngOnInit(): void {
  }
  logout(){
    this.login.logout();
    window.location.reload();
  }

}
