import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {}
public user={
  username:'',
  password:'',
  name:'',
  address:'',
  email:'',
  phone:'',
}

  formSubmit(){
    console.log(this.user);
    if(this.user.username==''||this.user.username==null){
      alert('Username is required!')
      return;
    }

    this.userService.addCustomer(this.user).subscribe(
      (data)=>{
        console.log(data);
        Swal.fire('Success', 'User is registered');
      },
      (error)=>{
        console.log(error);
        alert('something went wrong')
      }
    )
  }
}
