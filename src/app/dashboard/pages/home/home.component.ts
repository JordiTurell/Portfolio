import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../service/title-service/title-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(private tituloservice:TitleService){

  }

  ngOnInit(): void {
    this.tituloservice.setMyVariable('Home')
  }

}
