import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coupon } from 'src/app/class/coupon';
import { CouponService } from 'src/app/coupon.service';
import { JwtloginService } from 'src/app/services/jwtlogin.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  coupons: Coupon[];
  category : string;
  coupon: Coupon = new Coupon();

  constructor(private couponService: CouponService, private route: ActivatedRoute,
    private router: Router, private paymentService:PaymentService, public login:JwtloginService) { }

  ngOnInit(): void {
    this.category = this.route.snapshot.params["category"];
  this.couponService.getCouponByCategory(this.category).subscribe(data=>{
    this.coupon = data;
  }, error => console.log(error));
  }

  public searchCategory(){
    console.log('printed')
    let response= this.couponService.getCouponByCategory(this.category);
    response.subscribe((data:any) => this.coupons=data);
    console.log(this.coupons)
  }

  //login logout check
  logout(){
    this.login.logout();
    window.location.reload();
  }

  //payment
  options = {
    "key": "rzp_test_Ouxszjq8Ww4Jw0", // Enter the Key ID generated from the Dashboard
    "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "OnDeals",
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
    "prefill": {
        "name": "Gaurav Kumar",
        "email": "gaurav.kumar@example.com",
        "contact": "9999999999"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};

rzp1;
pay(){
  this.options.amount="100";
  this.rzp1 = new this.paymentService.nativeWindow.Razorpay(this.options);
  this.rzp1.open();
}


}
