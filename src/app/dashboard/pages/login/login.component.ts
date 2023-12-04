import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalloginComponent } from '../../modals/modallogin/modallogin.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  constructor(public dialog: MatDialog){
    
  }
  ngOnInit(): void {
   
  }
}
