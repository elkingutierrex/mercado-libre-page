import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { filter } from "rxjs/operators";

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.scss']
})
export class ProductItemsComponent implements OnInit {

  arrayItems:any = [];
  arrayResult: any = [];
  queryParam:string = '';


  constructor( private _app : AppService,
              private route: ActivatedRoute,
              private router: Router ) {

  }

  ngOnInit(): void {
    this.getItemsByQuery();

  }

  getItemsByQuery (){
    this.route.queryParams.subscribe(params => {
      this.queryParam = params['search'];
    });
    this._app.getItemsByQuery( this.queryParam ).subscribe( res =>{
      const data = res;
      if( !data ){
        return
      }
      console.log(data);
      this.arrayResult = data;
      this.arrayItems = this.arrayResult.results;
    })
  }


  redirectToUrlParam( id:string ){
    const timeOut =50;
    setTimeout(() => {
      this.router.navigate([`/home/items/${id}`] );
    }, timeOut);
  }

}
