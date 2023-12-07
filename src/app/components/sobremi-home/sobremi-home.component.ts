import { Component, OnInit } from '@angular/core';
import { ISobremi } from 'src/app/dashboard/model/sobremi/sobremi';
import { SobremiService } from 'src/app/dashboard/service/sobremi/sobremi.service';

@Component({
  selector: 'app-sobremi-home',
  templateUrl: './sobremi-home.component.html',
  styleUrls: ['./sobremi-home.component.scss']
})
export class SobremiHomeComponent implements OnInit{

  sobremi:ISobremi | any
  constructor(private sobremiservice:SobremiService){

  }

  ngOnInit(): void {
    this.sobremiservice.front().subscribe({
      next: (v) => {
        this.sobremi = v
      },
      error: (e) => console.error(e),
      complete: () => {
        
      }
    })
  }

}
