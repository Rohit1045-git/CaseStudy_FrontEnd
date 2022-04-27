import { Component, OnInit } from '@angular/core';
import { JwtloginService } from 'src/app/services/jwtlogin.service';

@Component({
  selector: 'app-jwt-login',
  templateUrl: './jwt-login.component.html',
  styleUrls: ['./jwt-login.component.css']
})
export class JwtLoginComponent implements OnInit {
loginData={
  username:'',
  password:''
}
  constructor(private login:JwtloginService) { }


  ngOnInit(): void {
  }

  formSubmit(){
    console.log("Login button clicked");

    if(this.loginData.username.trim()==''|| this.loginData.username==null){
      alert("Username is not valid")
    }
    if(this.loginData.password.trim()==''|| this.loginData.password==null){
      alert("Password is not valid")
    }

    this.login.generateToken(this.loginData).subscribe(
      (data:any)=>{
        console.log('success')
        console.log(data);

        //login...
        this.login.loginUser(data.token);

        this.login.getCurrentUser().subscribe(
          (user:any)=>{
            this.login.setUser(user);
            console.log(user);

            if(this.login.getUserRole()=="Admin"){

              window.location.href='/admin-dashboard'
            }else if(this.login.getUserRole()=="Customer"){
              window.location.href='/user-dashboard'
            }else{
              this.login.logout
            }
            
          }
        )

      },
      (error)=>{
        console.log('error');
        console.log(error)
      }
    )
  }
}
