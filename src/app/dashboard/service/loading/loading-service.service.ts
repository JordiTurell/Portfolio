import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingServiceService {
  private loadingSubject = new BehaviorSubject<boolean>(false);

  // Observable para suscribirse a cambios en el estado de carga
  loading$: Observable<boolean> = this.loadingSubject.asObservable();

  // Método para cambiar el estado de carga
  setLoading(loading: boolean): void {
    this.loadingSubject.next(loading);
  }
}
