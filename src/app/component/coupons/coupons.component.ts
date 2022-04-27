import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coupon } from 'src/app/class/coupon';
import { CouponService } from 'src/app/coupon.service';
import { JwtloginService } from 'src/app/services/jwtlogin.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})
export class CouponsComponent implements OnInit {
  [x: string]: any;

  coupons: Coupon[];
  id: string;
  coupon: Coupon = new Coupon();

  constructor(private route: ActivatedRoute,private router: Router,
    private couponService: CouponService, private paymentService:PaymentService, public login:JwtloginService) { }

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
    "name": "Coupons-Dekho.com",
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
    "prefill": {
        "name": "Rohit Manapure",
        "email": "rohitmanapure007@gmail.com",
        "contact": "7350758937"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};

rzp1;
pay(code : any){
  this.options.amount="100";
  console.log(code);
  this.couponService.setCode(code);
  this.rzp1 = new this.paymentService.nativeWindow.Razorpay(this.options);
  this.rzp1.open();
}


}
