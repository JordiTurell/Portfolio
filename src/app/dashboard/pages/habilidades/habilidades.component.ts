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
  
  request:Requestlist = {
    items: 10,
    pages: 0
  }
  constructor(private router:Router, private skillsService:SkillsService, private titleservice:TitleService){
    
  }

  ngOnInit(): void {
    this.titleservice.setMyVariable('Habilidades')
    this.skillsService.getlist(this.request).subscribe((response) => {
      console.log(response)
      //this.skills = response
    })
  }

  FormSkill(){
    this.router.navigate(['/dashboard/crearhabilidad'])
  }
}
