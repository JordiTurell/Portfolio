import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login/loginservice.service';
import { AuthService } from '../../service/auth/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginform: FormGroup

  constructor(private router:Router, private fb: FormBuilder, private loginservice: LoginService, 
    private authservice:AuthService){
    this.loginform = this.fb.group({
      nickname: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(){
    if(this.loginform.valid){
      this.loginservice.authenticate(this.loginform.value).subscribe((response)=>{
        if(response.status){
          this.authservice.setToken(response.token)
          this.router.navigate(['/dashboard/home'])
        }
      })
    }
  }

}
