import { Injectable } from '@angular/core';
import { Proyecto } from '../../model/proyecto/proyecto';
import { HeadersService } from '../headers/headers.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../enviorement/enviorement';
import { Observable } from 'rxjs';

const api = environment.api;

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient, private headers:HeadersService) { }

  set(project:Proyecto){
    project.gohst = false
    let header: HttpHeaders = this.headers.getheader();
    return this.http.post<Proyecto>(
      `${api}/Proyectos/SetProject`,
      project,
      { headers: header }
    )
  }

  ficha():Observable<Proyecto>{
    let header: HttpHeaders = this.headers.getheader();
    return this.http.get<Proyecto>(
      `${api}/Proyectos/GhostProject`,
      { headers: header }
    )
  }

  editficha(id:string):Observable<Proyecto>{
    let header: HttpHeaders = this.headers.getheader();
    return this.http.get<Proyecto>(
      `${api}/Proyectos/GetProject/${id}`,
      { headers: header }
    )
  }

  uploadlogo(file: File, id:string): Observable<any> {
    let header: HttpHeaders = this.headers.getheaderfile();
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<any>(
      `${api}/Proyectos/UploadFile/${id}`,
       formData,
       { headers: header }
      )
  }
}
