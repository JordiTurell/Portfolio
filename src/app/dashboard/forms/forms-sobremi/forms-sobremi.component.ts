import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SaveButtonComponent } from '../../general-component/inputs/buttons/save-button/save-button.component';
import { Router } from '@angular/router';
import { ErrorDialogService } from '../../service/error-dialog-service/error-dialog.service';
import { SobremiService } from '../../service/sobremi/sobremi.service';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

@Component({
  selector: 'app-forms-sobremi',
  templateUrl: './forms-sobremi.component.html',
  styleUrls: ['./forms-sobremi.component.scss']
})
export class FormsSobremiComponent implements AfterViewInit {
  public Editor = DecoupledEditor;
  
  sobremiform: FormGroup
  
  loaddatackeditor: string = ''
  datackeditor: string = ''
  @ViewChild('saveButton') saveButton!: SaveButtonComponent;
  isLoading = false;

  constructor(private fb: FormBuilder, public errordialogservice: ErrorDialogService, private sobremiservice:SobremiService){
    this.sobremiform = this.fb.group({
      title: ['', Validators.required],
      descripcion: ['', Validators.required],
      id: ['', Validators.required]
    })
  }
  
  public onReady( editor: DecoupledEditor ): void {
    const element = editor.ui.getEditableElement()!;
    const parent = element.parentElement!;

    parent.insertBefore(
      editor.ui.view.toolbar.element!,
      element
    );
  }

  onEditorChange({ editor }: any): void {
    const data = editor.getData();
    this.datackeditor = data;
  }

  ngAfterViewInit(): void {
    this.sobremiservice.get().subscribe({
      next: (v) => {
        if(v != null){
          this.loaddatackeditor = v.descripcion
          this.sobremiform.patchValue(v)
        }
      },
      error: (e) => console.error(e),
      complete: () => {
        
      }
    })
  }

  clickButton(){
    this.onSubmit()
  }

  onSubmit(){
    if(this.sobremiform.valid){
      this.isLoading = true;
      this.sobremiform.get('descripcion')?.setValue(this.datackeditor)
      this.sobremiservice.set(this.sobremiform.value).subscribe({
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
        })
      })
    }
  }
}
