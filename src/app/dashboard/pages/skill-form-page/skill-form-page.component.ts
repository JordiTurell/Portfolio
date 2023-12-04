import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skill-form-page',
  templateUrl: './skill-form-page.component.html',
  styleUrls: ['./skill-form-page.component.scss']
})
export class SkillFormPageComponent {

  constructor(private router:Router){

  }

  goBack(){
    this.router.navigate(['/dashboard/habilidades'])
  }
}
