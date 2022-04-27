import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coupon } from 'src/app/class/coupon';
import { CouponService } from 'src/app/coupon.service';
import { JwtloginService } from 'src/app/services/jwtlogin.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {

  coupons: Coupon[];
  provider: string;
  coupon: Coupon = new Coupon();

  constructor(private couponService: CouponService, private route: ActivatedRoute,
    private router: Router, private paymentService:PaymentService, public login:JwtloginService) { }

  ngOnInit(): void {
    this.provider = this.route.snapshot.params["provider"];
  this.couponService.getCouponByProvider(this.provider).subscribe(data=>{
    this.coupon = data;
  }, error => console.log(error));
  }

  public searchProvider(){
    console.log('printed')
    let response= this.couponService.getCouponByProvider(this.provider);
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
        "name": "Rohit Manapure",
        "email": "rohitmanapure007@gmail.com",
        "contact": "xxxxxxxxxx"
    },
    handler: function(response: any){
      alert({"title": "payment Successful",showConfirmButton: false, timer:1500});
      window.location.href="/coupons";
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
