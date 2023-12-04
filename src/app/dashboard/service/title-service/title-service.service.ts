import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private TituloSubject = new BehaviorSubject<string>('')
  TituloSubject$ = this.TituloSubject.asObservable();
  
  setMyVariable(value: string) {
    this.TituloSubject.next(value);
  }
}
