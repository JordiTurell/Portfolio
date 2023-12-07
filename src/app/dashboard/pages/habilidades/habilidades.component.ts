import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Skills } from '../../model/skills/skills';
import { SkillsService } from '../../service/skills/skills.service';
import { Requestlist } from '../../model/requestlist';
import { TitleService } from '../../service/title-service/title-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss']
})
export class HabilidadesComponent implements OnInit{
  
  skills?:Skills[]
  showlist:boolean = false

  constructor(private router:Router, private skillsService:SkillsService, private titleservice:TitleService){
    
  }

  ngOnInit(): void {
    this.titleservice.setMyVariable('Habilidades')
    this.skillsService.getlist().subscribe({
      next: (response) =>{
          this.skills = response
      },
      error: (e)=>{
        console.error(e)
      },
      complete:(() =>{
        this.showlist = true
      })
    })
  }

  edit(id:string){
    this.router.navigate(['/dashboard/edithabilidad', id])
  }

  FormSkill(){
    this.router.navigate(['/dashboard/crearhabilidad'])
  }
}
