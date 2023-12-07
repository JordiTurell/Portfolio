import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../service/title-service/title-service.service';
import { Router } from '@angular/router';
import { Proyecto } from '../../model/proyecto/proyecto';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit{

  projects?:Proyecto[]

  constructor(private titleservice:TitleService, private router:Router){

  } 
  ngOnInit(): void {
    this.titleservice.setMyVariable('Proyectos')
  }

  FormProject(){
    this.router.navigate(['/dashboard/crearproject'])
  }
}
