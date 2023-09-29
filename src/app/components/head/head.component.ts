import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  constructor(){

  }

  ngOnInit(): void {
      let title = document.getElementsByClassName('title') as HTMLCollectionOf<HTMLElement>
    
      Array.from(title).forEach((element, index) =>{
        let text = element.textContent
        if(text != null){
          element.innerText = ''
          let listado = this.separarPorLetrasYEspacios(text)
          for (let i = 0; i < listado.length; i++){
            
              element.classList.add('titleanimation')
              element.innerText = (element.textContent + listado[i])
              
              //cursor.style.marginLeft = '20px'
           
          }
        }
      })
  }

  separarPorLetrasYEspacios(texto: string): string[] {
    // Utiliza una expresión regular para dividir el texto por letras y espacios
    return texto.split(/(?<=\s)|(?=\s)|(?<=\S)|(?=\S)/);
  }
}
