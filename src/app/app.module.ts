import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CouponComponent } from './coupon/coupon.component';
import { HomeComponent } from './home/home.component';
import { UsercouponComponent } from './usercoupon/usercoupon.component';
import { HeaderComponent } from './header/header.component';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { JwtLoginComponent } from './pages/jwt-login/jwt-login.component';
import {MatInputModule} from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import { authInterceptorProviders } from './services/auth.interceptor';
import { FooterComponent } from './footer/footer.component';
import { CouponsComponent } from './component/coupons/coupons.component';
import { UpdateCouponComponent } from './component/update-coupon/update-coupon.component';
import { CreateCouponComponent } from './component/create-coupon/create-coupon.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
import { AboutComponent } from './component/about/about.component';
import { RazorpayComponent } from './payment/razorpay/razorpay.component';
import { PartnersComponent } from './component/partners/partners.component';
import { SuccessComponent } from './component/success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    CouponComponent,
    HomeComponent,
    UsercouponComponent,
    HeaderComponent,
    SignupComponent,
    JwtLoginComponent,
    FooterComponent,
    CouponsComponent,
    UpdateCouponComponent,
    CreateCouponComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    AboutComponent,
    RazorpayComponent,
    PartnersComponent,
    SuccessComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
