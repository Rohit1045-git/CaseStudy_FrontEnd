import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { CouponService } from '../coupon.service';



@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {
  couponDetails:any;
  couponsToUpdate={
    category:"",
    count:"",
    offer:"",
    companyName:""
  };
  
  constructor(private couponService:CouponService) { 
    this.getCoupons();
  
  }  
register(registerForm: { value: any; }){
  this.couponService.addCoupon(registerForm.value).subscribe(
    (resp)=>console.log(resp)
  )
}
getCoupons(){
  this.couponService.getCoupon().subscribe(
    (resp)=>{
      console.log(resp);
      this.couponDetails=resp;
     }
     )
  }

deleteCoupon(coupon: any){
  this.couponService.deleteCoupon(coupon.couponId).subscribe(
    (resp)=>{
      console.log(resp);    },
  )
}

edit(coupon){
this.couponsToUpdate=coupon;
}
/*updateCoupon(){
  this.couponService.updateCoupon().subscribe(
    (resp)=>console.log(resp)
  )
}*/

  ngOnInit() {
    
   
}

}