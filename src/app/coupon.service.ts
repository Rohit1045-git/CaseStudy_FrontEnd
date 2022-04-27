import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coupon } from './class/coupon';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor(private http:HttpClient) { }

  private baseURL1= "http://localhost:8083/coupon";

API='http://localhost:8083';
  public addCoupon(couponData: any){
    return this.http.post(this.API+'/addcoupon', couponData);
  }

  public getCoupon(){
    return this.http.get(this.API+'/findall');
  }

  //get all coupons
  getCouponList(): Observable<Coupon[]>{
    return this.http.get<Coupon[]>(`${this.baseURL1}/list`);
  }

  // Add coupon
  createCoupon(coupon: Coupon): Observable<Object>{
    return this.http.post(`${this.baseURL1}/add`,coupon);
  }

  //get coupon by Id
  getCouponById(id: string): Observable<Coupon>{
    return this.http.get<Coupon>(`${this.baseURL1}/id/${id}`);
  }

  //update coupon
  updateCoupon(id:string, coupon: Coupon): Observable<Object>{
    return this.http.put(`${this.baseURL1}/update/${id}`,coupon);
  }

  deleteCoupon(id:string): Observable<Object>{
    return this.http.delete(`${this.baseURL1}/delete/${id}`, {responseType: 'text'});
  }

  //get coupon by category
  getCouponByCategory(category: string): Observable<Coupon>{
    return this.http.get<Coupon>(`${this.baseURL1}/Findby/${category}`);
  }

  //get coupon by provider
  getCouponByProvider(provider: string): Observable<Coupon>{
    return this.http.get<Coupon>(`${this.baseURL1}/findcoupon/${provider}`);
  }
  public setCode(code:any)
  {
    localStorage.setItem('code',code)
  }

  public getCode()
  {
    return localStorage.getItem('code');
  }

}
