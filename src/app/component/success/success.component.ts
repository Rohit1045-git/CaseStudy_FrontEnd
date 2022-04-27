import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/class/coupon';
import { CouponService } from 'src/app/coupon.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  offer!: any;
  constructor(private couponService: CouponService) { }

  ngOnInit(): void {
    this.offer = localStorage.getItem('code');

    console.log("Offer is here !: ");
    console.log(this.offer);
    
  }

  onSubmit(){
    localStorage.removeItem('code');
    window.location.href="/usercoupon";
  }

}
