import { Injectable } from '@angular/core';
import { HeadersService } from '../headers/headers.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../enviorement/enviorement';
import { ILogin } from '../../model/login/login';
import { IToken } from '../../model/token/token';

const api = environment.api;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private headers:HeadersService) { }

  authenticate(loginvm: ILogin): Observable<IToken> {
    let header: HttpHeaders = this.headers.getheaderLogin();
    return this.http.post<IToken>(
      `${api}/api/users/login`,
      loginvm,
      { headers: header }
    );
  }
}
