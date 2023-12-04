import { Component, ViewChild } from '@angular/core';
import { SaveButtonComponent } from '../../general-component/inputs/buttons/save-button/save-button.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorDialogService } from '../../service/error-dialog-service/error-dialog.service';

@Component({
  selector: 'app-form-skill',
  templateUrl: './form-skill.component.html',
  styleUrls: ['./form-skill.component.scss']
})
export class FormSkillComponent {
  skillform: FormGroup
  @ViewChild('saveButton') saveButton!: SaveButtonComponent;
  isLoading = false;

  constructor(private router:Router, private fb: FormBuilder, public errordialogservice: ErrorDialogService){
    this.skillform = this.fb.group({
      name: ['', Validators.required],
      percent: ['', Validators.required],
      logo: [''],
      id: ['']
    })
  }
  
  clickButton(){
    if(this.skillform.valid){
      
    }
  }
}
