import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { SaveButtonComponent } from '../../general-component/inputs/buttons/save-button/save-button.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorDialogService } from '../../service/error-dialog-service/error-dialog.service';
import { SkillsService } from '../../service/skills/skills.service';

@Component({
  selector: 'app-form-skill',
  templateUrl: './form-skill.component.html',
  styleUrls: ['./form-skill.component.scss']
})
export class FormSkillComponent implements OnInit{
  skillform: FormGroup
  @ViewChild('saveButton') saveButton!: SaveButtonComponent;
  @Input()id?:string
  isLoading = false
  nuevo:boolean = true
  preview:string = ''
  currentFile?: File


  constructor(private router:Router, private fb: FormBuilder, public errordialogservice: ErrorDialogService, private skillservice:SkillsService){
    this.skillform = this.fb.group({
      nombre: ['', Validators.required],
      porcentage: ['', Validators.required],
      logo: [''],
      id: ['']
    })
  }
  ngOnInit(): void {
    this.nuevo = (this.id == null)
    if(this.nuevo){
      this.skillservice.ficha().subscribe({
        next: (response) =>{
          this.skillform.patchValue(response)
        },
        error: (e)=>{
          this.errordialogservice.openErrorDialog('Acceso incorrecto')
        },
        complete:(() =>{
          
        })
      })
    }else{
      if(this.id != null){
        this.skillservice.editficha(this.id).subscribe({
          next: (response) =>{
            this.skillform.patchValue(response)
          },
          error: (e)=>{
            this.errordialogservice.openErrorDialog('Acceso incorrecto')
          },
          complete:(() =>{
            this.skillform.value.id = this.id
          })
        })
      }
    }
  }
  
  clickButton(){
    if(this.skillform.valid){
      this.isLoading = true;
      this.skillservice.set(this.skillform.value).subscribe({
        next: (response) =>{
          
        },
        error: (e)=>{
          this.errordialogservice.openErrorDialog('Acceso incorrecto')
          this.isLoading = false
          this.saveButton.reset()
        },
        complete:(() =>{
          this.isLoading = false
          this.saveButton.reset()
          this.router.navigate(['/dashboard/habilidades'])
        })
      })
    }
  }

  fileupload(){
    let upload = document.getElementById('upload') as HTMLInputElement
    upload.click()
  }

  updatefile(event:any){
    this.currentFile = event.target.files[0];
    if (this.currentFile) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.preview = e.target.result;
      };
      reader.readAsDataURL(this.currentFile);
      this.skillservice.uploadlogo(this.currentFile, this.skillform.value.id).subscribe(response => {
        
      });
    }
  }

  level(){
    let bar = document.getElementById('default-range') as HTMLInputElement
    let valor = document.getElementById('valor') as HTMLSpanElement

    valor.innerText = bar.value.toString()+'%'
  }
}
