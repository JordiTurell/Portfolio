import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../service/title-service/title-service.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit{

  constructor(private titleservice:TitleService){

  }

  ngOnInit(): void {
    this.titleservice.setMyVariable('Proyectos')
  }

}
