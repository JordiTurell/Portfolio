import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectsService } from '../../service/project/projects.service';
import { Router } from '@angular/router';
import { ErrorDialogService } from '../../service/error-dialog-service/error-dialog.service';
import { Skills } from '../../model/skills/skills';
import { SkillsService } from '../../service/skills/skills.service';
import { SaveButtonComponent } from '../../general-component/inputs/buttons/save-button/save-button.component';
import { SelectMultipleComponent } from '../../general-component/select-multiple/select-multiple.component';

@Component({
  selector: 'app-form-project',
  templateUrl: './form-project.component.html',
  styleUrls: ['./form-project.component.scss']
})
export class FormProjectComponent implements OnInit {

  projectform : FormGroup
  skills?: Skills[]
  isLoading = false
  @ViewChild('saveButton') saveButton!: SaveButtonComponent;
  @ViewChild('selectMultiple') selectmultiple!: SelectMultipleComponent;
  @Input()id?:string
  nuevo:boolean = true
  currentFile?: File
  preview:string = ''
  selectedTab = 1;
  skillsselected: string[] = []
  
  images:string[] = []
  
  chunkedImages = this.chunkArray(this.images, 3);

  chunkArray(array: any[], size: number): any[] {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }

  constructor(private router:Router, private fb: FormBuilder, public errordialogservice: ErrorDialogService, private projectservice:ProjectsService, private skillsservice:SkillsService){
    this.projectform = this.fb.group({
      id : [''],
      title : ['', Validators.required],
      description: ['', Validators.required],
      idskills: ['']
    })
  }

  selectTab(tabNumber: number): void {
    this.selectedTab = tabNumber;
  }

  ngOnInit(): void {
    this.skillsservice.getlist().subscribe({
      next:(v) => {
        this.skills = v
      },
      error: (e) => console.error(e),
      complete: (() => {
        
      })
    })
    if(this.nuevo){
      this.projectservice.ficha().subscribe({
        next: (response) =>{
          this.projectform.patchValue(response)
          this.images = response.imagenes
        },
        error: (e)=>{
          this.errordialogservice.openErrorDialog('Acceso incorrecto')
        },
        complete:(() =>{
          
        })
      })
    }else{
      if(this.id != null){
        this.projectservice.editficha(this.id).subscribe({
          next: (response) =>{
            this.projectform.patchValue(response)
          },
          error: (e)=>{
            this.errordialogservice.openErrorDialog('Acceso incorrecto')
          },
          complete:(() =>{
            this.projectform.value.id = this.id
          })
        })
      }
    }
  }

  clickButton(){
    if(this.projectform.valid){
      this.selectmultiple.opcionesSeleccionadas.forEach(element => {
        this.projectform.value.idskills.push(element.id)
      })
      this.isLoading = true;
      this.projectservice.set(this.projectform.value).subscribe({
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
      this.projectservice.uploadlogo(this.currentFile, this.projectform.value.id).subscribe(response => {
        
      });
    }
  }
}
