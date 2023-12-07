import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeadersService } from '../headers/headers.service';
import { Skills } from '../../model/skills/skills';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { environment } from '../../enviorement/enviorement';
import { Requestlist } from '../../model/requestlist';

const api = environment.api;

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private http: HttpClient, private headers:HeadersService) { }

  getlist():Observable<Skills[]>{
    let header: HttpHeaders = this.headers.getheader();
    return this.http.get<Skills[]>(
      `${api}/Skills/DataTable`,
      { headers: header }
    )
  }

  getlistfront():Observable<Skills[]>{
    let header: HttpHeaders = this.headers.getheaderLogin();
    return this.http.get<Skills[]>(
      `${api}/Front/Skills`,
      { headers: header }
    )
  }

  set(skills:Skills):Observable<Skills>{
    skills.ghost = false
    let header: HttpHeaders = this.headers.getheader();
    return this.http.post<Skills>(
      `${api}/Skills/SetSkills`,
      skills,
      { headers: header }
    )
  }

  ficha():Observable<Skills>{
    let header: HttpHeaders = this.headers.getheader();
    return this.http.get<Skills>(
      `${api}/Skills/GhostSkill`,
      { headers: header }
    )
  }

  editficha(id:string):Observable<Skills>{
    let header: HttpHeaders = this.headers.getheader();
    return this.http.get<Skills>(
      `${api}/Skills/GetSkill/${id}`,
      { headers: header }
    )
  }

  uploadlogo(file: File, id:string): Observable<any> {
    let header: HttpHeaders = this.headers.getheaderfile();
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<any>(
      `${api}/Skills/UploadFile/${id}`,
       formData,
       { headers: header }
      )
  }
}
