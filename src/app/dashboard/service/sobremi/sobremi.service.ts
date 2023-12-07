import { Injectable } from '@angular/core';
import { HeadersService } from '../headers/headers.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ISobremi } from '../../model/sobremi/sobremi';
import { environment } from '../../enviorement/enviorement';
import { Observable } from 'rxjs';

const api = environment.api;

@Injectable({
  providedIn: 'root'
})
export class SobremiService {

  constructor(private http: HttpClient, private headers:HeadersService) { }

  get():Observable<ISobremi>{
    let header: HttpHeaders = this.headers.getheader();
    return this.http.get<ISobremi>(
      `${api}/Sobremi/Get`,
      { headers: header }
    );
  }

  front():Observable<ISobremi>{
    let header: HttpHeaders = this.headers.getheaderLogin();
    return this.http.get<ISobremi>(
      `${api}/Front/Getsobremi`,
      { headers: header }
    )
  }

  set(sobremi:ISobremi):Observable<ISobremi>{
    let header: HttpHeaders = this.headers.getheader();
    return this.http.post<ISobremi>(
      `${api}/Sobremi/Set`,
      sobremi,
      { headers: header }
    );
  }
}
