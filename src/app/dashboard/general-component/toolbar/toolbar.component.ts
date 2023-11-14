import { Component } from '@angular/core';
import { AuthService } from '../../service/auth/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  timedOutCloser:any;

  constructor(private router:Router, private authservice:AuthService){}

  inicio(){
    this.router.navigate(['/dashboard/home'])
  }
  logout(){
    this.authservice.removeToken()
    window.location.reload()
  }

  Proyectos(){
    this.router.navigate(['/dashboard/proyectos'])
  }

  Skills(){
    this.router.navigate(['/dashboard/habilidades'])
  }

  Administracion(){
    this.router.navigate(['/dashboard/administracion'])
  }
}
