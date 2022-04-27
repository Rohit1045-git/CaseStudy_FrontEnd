import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/services/payment.service';
import Swal, { SweetAlertArrayOptions } from 'sweetalert2';

@Component({
  selector: 'app-razorpay',
  templateUrl: './razorpay.component.html',
  styleUrls: ['./razorpay.component.css']
})
export class RazorpayComponent implements OnInit {

  constructor(private paymentService:PaymentService) { }

  ngOnInit(): void {
    
  }

  options = {
    "key": "rzp_test_Ouxszjq8Ww4Jw0", // Enter the Key ID generated from the Dashboard
    "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "OnDeals",
    "description": "Test Transaction",
    "image": "assets/images/deal/jpeg",
    "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
    "prefill": {
        "name": "Rohit Manapure",
        "email": "rohitmanapure007@gmail.com",
        "contact": "7350758937"
    },
    handler: function(response: any){
      console.log(response);
      
      Swal.fire({position:'center',
      icon:'success',
      title: "payment Successful",showConfirmButton: false, timer:15000});
      window.location.href="/success";
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    },
   
};

rzp1;
pay(){
  this.options.amount="1000";
  this.rzp1 = new this.paymentService.nativeWindow.Razorpay(this.options);
  this.rzp1.open();
}

}
