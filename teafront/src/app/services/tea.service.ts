import Tea from '../models/tea.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Response} from '@angular/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable()
export class TeaService {

  api_url = 'http://localhost:3000';
  teaUrl = `${this.api_url}/api/teas`;

  constructor(
    private http: HttpClient
  ) { }

  createTea(tea: Tea): Observable<any>{
    //returns the observable of http post request 
    return this.http.post(`${this.teaUrl}`, tea);
  }

  getTeas(): Observable<Tea[]>{
    return this.http.get(this.teaUrl)
    .pipe(map(res  => {
      //Maps the response object sent from the server
        
      return res["data"].docs as Tea[];
    }))
  }

  oneTea(id:string):Observable<any>{
    let showUrl = `${this.teaUrl}/${id}`
    return this.http.get(showUrl);
  }

  editTea(tea:Tea){
    let editUrl = `${this.teaUrl}`
    //returns the observable of http put request 
    return this.http.put(editUrl, tea);
  }

  deleteTea(id:string):any{
    //Delete the object by the id
    let deleteUrl = `${this.teaUrl}/${id}`
    return this.http.delete(deleteUrl)
    .pipe(map(res  => {
      return res;
    }))
  }
}