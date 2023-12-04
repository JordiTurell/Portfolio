import { Injectable } from '@angular/core';
import { environment } from '../../enviorement/enviorement';
import { Observable, catchError, map, of } from 'rxjs';

const api = environment.api;
const version = environment.version;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  localstoragetoken = environment.token
    
  constructor() { }

  isAuthenticated(token:string):Observable<boolean> {
    return of(true)
  }

  setToken(token: string): boolean {
    localStorage.setItem(this.localstoragetoken, token)
    return true
  }

  removeToken(): void {
    localStorage.removeItem(this.localstoragetoken);
  }

  getToken(): string | null {
    return localStorage.getItem(this.localstoragetoken);
  }
}
