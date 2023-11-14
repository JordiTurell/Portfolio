import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Skills } from '../../model/skills/skills';
import { SkillsService } from '../../service/skills/skills.service';
import { Requestlist } from '../../model/requestlist';

const ELEMENT_DATA: Skills[] = [
  {id: '1', nombre: 'Hydrogen', years: 1, description: 'H'},
  {id: '2', nombre: 'Helium', years: 1, description: 'He'},
  {id: '3', nombre: 'Lithium', years: 1, description: 'Li'},
  {id: '4', nombre: 'Beryllium', years: 1, description: 'Be'},
  {id: '5', nombre: 'Boron', years: 1, description: 'B'},
  {id: '6', nombre: 'Carbon', years: 1, description: 'C'},
  {id: '7', nombre: 'Nitrogen', years: 1, description: 'N'},
  {id: '8', nombre: 'Oxygen', years: 1, description: 'O'},
  {id: '9', nombre: 'Fluorine', years: 1, description: 'F'},
  {id: '10', nombre: 'Neon', years: 1, description: 'Ne'},
];

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss']
})
export class HabilidadesComponent implements OnInit{
  
  displayColumns:string[] = ['id', 'nombre', 'años']
  dataSource = ELEMENT_DATA;

  request:Requestlist = {
    items: 10,
    pages: 0
  }
  constructor(private skillsService:SkillsService){
    
  }
  ngOnInit(): void {
    this.skillsService.getlist(this.request).subscribe((response) => {
      console.log(response)
      //this.skills = response
    })
  }
}
