import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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


  constructor( private _app : AppService,
              private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.getProductsByQuery();

  }

  getProductsByQuery (){
    this.route.queryParamMap.subscribe( item => console.log('eagc', item));
    const query = null;
    this._app.getProductsByQuery( query ).subscribe( res =>{
      const data = res;
      if( !data ){
        return
      }
      console.log(data);
      this.arrayResult = data;
      this.arrayItems = this.arrayResult.results;
    })
  }
}
