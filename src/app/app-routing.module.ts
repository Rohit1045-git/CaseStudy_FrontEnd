import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { CardComponent } from './component/card/card.component';
import { CategoryComponent } from './component/category/category.component';
import { CouponsComponent } from './component/coupons/coupons.component';
import { ProviderComponent } from './component/provider/provider.component';
import { SuccessComponent } from './component/success/success.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';



import { CouponComponent } from './coupon/coupon.component';




import { HomeComponent } from './home/home.component';


import { JwtLoginComponent } from './pages/jwt-login/jwt-login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { RazorpayComponent } from './payment/razorpay/razorpay.component';

import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';

import { UsercouponComponent } from './usercoupon/usercoupon.component';


const routes: Routes = [
  {path:'', redirectTo: "home", pathMatch:"full"},
  {path:'coupon',component:CouponComponent},
  {path:'usercoupon',component:UsercouponComponent},
  {path:'home', component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'jwtlogin',component:JwtLoginComponent},
  {path:'coupons', component:CouponsComponent},
  {path:'couponlist',component:CouponComponent},
  {path:'admin-dashboard', component:AdminDashboardComponent,canActivate:[AdminGuard]},
  {path:'user-dashboard', component:UserDashboardComponent,canActivate:[NormalGuard]},
  {path:'category', component:CategoryComponent},
  {path:'provider', component:ProviderComponent},
  {path:'card', component:CardComponent},
  {path:'payment', component:RazorpayComponent},
  {path:'success',component:SuccessComponent},
  {path:'about',component:AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
