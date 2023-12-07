import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-select-multiple',
  templateUrl: './select-multiple.component.html',
  styleUrls: ['./select-multiple.component.scss']
})
export class SelectMultipleComponent implements OnInit{
  @Input()data:any[] = []
  @Input()opcionesSeleccionadas: OptionSelect[] = [];
  visible:boolean = false
  ngOnInit(): void {
    
  }

  show(){
    const dropdown = document.getElementById('dropdownskills') as HTMLElement
    dropdown.click()
    this.visible = !this.visible
  }

  select(event:Event){
    const dropdown = document.getElementById('dropdownskills') as HTMLElement
    const value = (event.target as HTMLInputElement).textContent
    const id = (event.target as HTMLInputElement).value
    
    this.opcionesSeleccionadas.push({
      id: id,
      value: value
    })
    dropdown.click()
    this.visible = !this.visible
  }

  removeitem(event:Event){
    const value = (event.target as HTMLInputElement).textContent
    this.opcionesSeleccionadas.forEach(element => {
      if(element.value == value){
        this.opcionesSeleccionadas = this.opcionesSeleccionadas.filter(x => x.value != value);
        return;
      }
    })
  }
}

export interface OptionSelect{
  id:string
  value:string | null
}