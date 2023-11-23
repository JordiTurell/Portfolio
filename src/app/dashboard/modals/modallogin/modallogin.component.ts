import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modallogin',
  templateUrl: './modallogin.component.html',
  styleUrls: ['./modallogin.component.scss']
})
export class ModalloginComponent {
  
  constructor(public dialogRef: MatDialogRef<ModalloginComponent>) {
  }
}
