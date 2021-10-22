import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {


  apiUrl = environment.apiUrl;

  constructor( private http : HttpClient ) { }

  getItemsByQuery( query:string ){
    const queryIn = {
      q : query,
      limit:4
    }
    return this.http.get(`${this.apiUrl}/search/getItemsByQuery` ,  { params:queryIn } );
  }

  getItemById( query:any ){
    const queryIn = {
      id : query
    }
    return this.http.get(`${this.apiUrl}/search/getItemById`, { params:queryIn } );
  }


}
