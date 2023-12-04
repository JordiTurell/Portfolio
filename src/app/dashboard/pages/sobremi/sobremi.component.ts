import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../service/title-service/title-service.service';
import { SobremiService } from '../../service/sobremi/sobremi.service';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.scss']
})
export class SobremiComponent implements OnInit{

  constructor(private titleservice:TitleService){

  }

  ngOnInit(): void {
    this.titleservice.setMyVariable('Sobre mi')
  }

}
