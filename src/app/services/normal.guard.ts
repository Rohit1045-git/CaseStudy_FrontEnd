import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtloginService } from './jwtlogin.service';

@Injectable({
  providedIn: 'root'
})
export class NormalGuard implements CanActivate {
  
  constructor(private login:JwtloginService, private router:Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if(this.login.isLoggenIn() && this.login.getUserRole()=='Customer'){
      return true;
    }
      
    this.router.navigate['usercoupon']
      return false
    }

  
  
}
