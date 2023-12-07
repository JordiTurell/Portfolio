import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-skill-form-page',
  templateUrl: './skill-form-page.component.html',
  styleUrls: ['./skill-form-page.component.scss']
})
export class SkillFormPageComponent {
  id?:string 
  constructor(private router:Router, private route: ActivatedRoute){
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.id = id
    });
  }

  goBack(){
    this.router.navigate(['/dashboard/habilidades'])
  }
}
