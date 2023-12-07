import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/dashboard/model/skills/skills';
import { SkillsService } from 'src/app/dashboard/service/skills/skills.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent implements OnInit{
  skills?:Skills[]

  constructor(private skillsservice:SkillsService){

  }
  ngOnInit(): void {
    this.skillsservice.getlistfront().subscribe({
      next:(v) =>{
        this.skills = v      
      },
      error:(e) =>{ 
        console.error(e)
      },
      complete:(()=>{

      })
    })
  }

}
