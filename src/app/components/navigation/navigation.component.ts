import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements AfterViewInit {
  
  ngAfterViewInit(): void {
    let navicon = document.querySelector('.nav-icon') as HTMLImageElement
    navicon.classList.add('nav-icon-animated')

    let navlinks = document.getElementsByClassName('nav-link') as HTMLCollectionOf<HTMLAnchorElement>
    
    Array.from(navlinks).forEach((element, index) => {
      console.log(element)
      setTimeout(()=>{
        element.classList.add('navlinkanimated')
      }, index * 150 )
    });
  }

  toggleMenu(){
    
  }
}
