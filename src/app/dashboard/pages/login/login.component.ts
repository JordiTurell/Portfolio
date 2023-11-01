import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginform: FormGroup

  constructor(private router:Router, private fb: FormBuilder){
    this.loginform = this.fb.group({
      nickname: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(){

  }

}
