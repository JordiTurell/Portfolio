import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalerrorComponent } from '../../modals/modalerror/modalerror.component';

@Injectable({
  providedIn: 'root'
})
export class ErrorDialogService {

  constructor(public dialog: MatDialog) { }

  openErrorDialog(errorMessage: string): void {
    this.dialog.open(ModalerrorComponent, {
      width: '400px',
      data: { errorMessage: errorMessage }
    });
  }
}
