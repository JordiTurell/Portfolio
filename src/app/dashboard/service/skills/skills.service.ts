import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeadersService } from '../headers/headers.service';
import { Skills } from '../../model/skills/skills';
import { Observable, map, of } from 'rxjs';
import { environment } from '../../enviorement/enviorement';
import { Requestlist } from '../../model/requestlist';

const api = environment.api;

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private http: HttpClient, private headers:HeadersService) { }

  getlist(request:Requestlist):Observable<Skills[]>{
    let header: HttpHeaders = this.headers.getheader();
    return this.http.post<Skills[]>(
      `${api}/api/skills/DataTable`,
      request,
      { headers: header }
    )
  }
}
