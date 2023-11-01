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
  //   this.request = {
  //     item: token
  //   }
  //   let header: HttpHeaders = this.headers.getheaderLogin()
  //   return this.http.post<Responseitem<string>>(
  //     `${api}/Areas/${version}/VerificarToken`,
  //     this.request,
  //     { headers: header }
  //   ).pipe(map((resp) => {
  //     return this.setToken(resp.item)
  //     //return of(true)
  //   }), catchError(() => of(false)));
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
