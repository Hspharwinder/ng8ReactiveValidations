import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseURL, Api } from '../path.config/Api';


@Injectable({
  providedIn: 'root'
})
export class CrudService {    

  constructor(private http:HttpClient) { }
  post(data: any){
    let url = BaseURL + Api.POST;
    return this.http.post(`${url}`, data);
  }  
}