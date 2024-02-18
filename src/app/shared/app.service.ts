import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  BASE_URL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getPatents() {
    const data =  this.http.get(`${this.BASE_URL}/api/get_patents`);
    console.log(data);
    return data;
  }
  getPatent(patentNumber: any){
    const params = new HttpParams().set('patentNumber', patentNumber);
    const data =  this.http.get(`${this.BASE_URL}/api/get_patent`, { params });
    console.log(data);
    return data;
  }
}
