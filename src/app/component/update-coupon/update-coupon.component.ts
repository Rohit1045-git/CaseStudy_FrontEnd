import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coupon } from 'src/app/class/coupon';
import { CouponService } from 'src/app/coupon.service';

@Component({
  selector: 'app-update-coupon',
  templateUrl: './update-coupon.component.html',
  styleUrls: ['./update-coupon.component.css']
})
export class UpdateCouponComponent implements OnInit {

  id !: string;
  coupon: Coupon = new Coupon();

  constructor(private couponService: CouponService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.couponService.getCouponById(this.id).subscribe(data=>{
      this.coupon = data;
    }, error => console.log(error));
}

onSubmit(){
  this.couponService.updateCoupon(this.id, this.coupon).subscribe(data =>{
    this.goToCouponList();
  },
  error => console.log(error));
}

goToCouponList(){
  this.router.navigate(['/coupons']);
}

}
