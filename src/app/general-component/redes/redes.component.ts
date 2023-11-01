import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.scss']
})
export class RedesComponent implements AfterViewInit{
  
  constructor(){

  }

  ngAfterViewInit(): void {
    let li = document.getElementsByClassName('iconsocial') as HTMLCollectionOf<HTMLElement>

    Array.from(li).forEach((element, index) =>{
      setTimeout(()=>{
        element.classList.add('socialanimated')        
      }, index * 150)
    })
  }

}
