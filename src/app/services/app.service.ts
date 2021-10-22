import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {


  apiUrl = environment.apiUrl;
  objCtrl={
    limitItemsPerPage : 4,
    actualPage        : 1,
    offsetPage        : 0,
    idItemSearch      : '',
    productSearch     : ''
  }

  constructor( private http : HttpClient ) { }

  getItemsByQuery( query:string ){
    const queryIn = {
      q     : query,
      limit : this.objCtrl.limitItemsPerPage,
      offset: (this.objCtrl.actualPage * this.objCtrl.limitItemsPerPage) - this.objCtrl.limitItemsPerPage
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
