import { Component, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements AfterViewInit {

  istoggle: boolean = false
  
  isNavbarOpaque = true;
  
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    console.log(scrollPosition)
    this.isNavbarOpaque = scrollPosition > 100
  }

  ngAfterViewInit(): void {
    let navicon = document.querySelector('.nav-icon') as HTMLImageElement
    navicon.classList.add('nav-icon-animated')

    let navlinks = document.getElementsByClassName('nav-link') as HTMLCollectionOf<HTMLAnchorElement>
    
    Array.from(navlinks).forEach((element, index) => {
      setTimeout(()=>{
        element.classList.add('navlinkanimated')
      }, index * 150 )
    });
  }

  toggleMenu(){
    this.istoggle = !this.istoggle
  }
}
