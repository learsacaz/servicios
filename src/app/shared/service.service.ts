import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private URL_API: string = 'http://clase.multimarketapp.com/api/';

  constructor(private http: HttpClient) { }

  private header = new HttpHeaders()
    .set('X-API-KEY','')
    .set('Accept','application/json')
    .set('Content-Type', 'application/json ; charset=utf-8');

  private opciones = {
    headers: this.header
  }

  //Metodo get / actividad

  public getDatos(directionApi: string):Observable<any>{
    return this.http.get(this.URL_API+directionApi, this.opciones);
  }

  //Metodo post 
  public postDatos(directionApi: string, body:any){
    return this.http.post(this.URL_API+directionApi, body, this.opciones);
  }
}
