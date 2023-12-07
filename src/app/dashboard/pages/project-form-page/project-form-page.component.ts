import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-form-page',
  templateUrl: './project-form-page.component.html',
  styleUrls: ['./project-form-page.component.scss']
})
export class ProjectFormPageComponent {

  id?:string 
  constructor(private router:Router, private route: ActivatedRoute){
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.id = id
    });
  }

  goBack(){
    this.router.navigate(['/dashboard/proyectos'])
  }
  
}
