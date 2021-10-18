import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {


  apiUrl = environment.apiUrl;

  constructor( private http : HttpClient ) { }

  getProductsByQuery( query:any ){
    return this.http.get(`${this.apiUrl}/search` ,  { params:query } );
  }


}
