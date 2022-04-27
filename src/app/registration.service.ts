import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import {HttpClient} from '@angular/common/http'
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient) { }

  public loginUserFromRemote(user:User):Observable<any>{
return this.http.post("http://localhost:8081/deals/login",user)

  }
  public registerUserFromRemote(user:User):Observable<any>{
    return this.http.post<any>("http://localhost:8081/deals/registeruser",user)
  }


public loginAdminFromRemote(admin:Admin):Observable<any>{

  return this.http.post("http://localhost:8082/deals/adminlogin",admin)
  }

  
}