import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coupon } from 'src/app/class/coupon';
import { CouponService } from 'src/app/coupon.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  coupons: Coupon[];
  id: string;
  coupon: Coupon = new Coupon();

  constructor(private route: ActivatedRoute,private router: Router,private couponService: CouponService) { }

  ngOnInit(): void {
    this.getCoupons();
  }

  private getCoupons(){
    this.couponService.getCouponList().subscribe(data =>{
      this.coupons = data;
    }) 
  }

  updateCoupon(id:string){
    this.router.navigate(["update-coupon",id]);
  }

  deleteCoupon(id: string){

    this.couponService.deleteCoupon(id).subscribe((data: any)=>{
      console.log(data);
      this.getCoupons();
    })
  }

}
