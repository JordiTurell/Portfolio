import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth/authservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../service/login/loginservice.service';
import { ModalerrorComponent } from '../../modals/modalerror/modalerror.component';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogService } from '../../service/error-dialog-service/error-dialog.service';
import { SaveButtonComponent } from '../../general-component/inputs/buttons/save-button/save-button.component';

@Component({
  selector: 'app-forms-login',
  templateUrl: './forms-login.component.html',
  styleUrls: ['./forms-login.component.scss']
})
export class FormsLoginComponent {
  
  loginform: FormGroup
  @ViewChild('saveButton') saveButton!: SaveButtonComponent;
  isLoading = false;

  constructor(private router:Router, private fb: FormBuilder, private loginservice: LoginService, private authservice:AuthService, public errordialogservice: ErrorDialogService){
    this.loginform = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  clickButton(){
    this.onSubmit()
  }


  onSubmit(){
    if(this.loginform.valid){
      this.isLoading = true;
      this.loginservice.authenticate(this.loginform.value).subscribe({
        next: (response) =>{
          this.authservice.setToken(response.token)
        },
        error: (e)=>{
          this.errordialogservice.openErrorDialog('Acceso incorrecto')
          this.isLoading = false
          this.saveButton.reset()
        },
        complete:(() =>{
          if(this.authservice.getToken() != null){
            this.router.navigate(['/dashboard/home'])
          }else{
            this.errordialogservice.openErrorDialog('Acceso incorrecto')
          }
        })
      })
    }else{
      this.isLoading = false;
      this.saveButton.reset();
    }
  }
}

