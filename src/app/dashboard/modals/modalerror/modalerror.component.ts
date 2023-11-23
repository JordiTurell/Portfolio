import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modalerror',
  templateUrl: './modalerror.component.html',
  styleUrls: ['./modalerror.component.scss']
})
export class ModalerrorComponent{
  @Input() errorMessage: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: { errorMessage: string }){
    this.errorMessage = data.errorMessage
  }
}
