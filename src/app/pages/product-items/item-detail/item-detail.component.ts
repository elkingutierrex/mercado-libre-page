import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  idItem:string|null='';
  objItem: Product|any ={};
  constructor( private route: ActivatedRoute,
              private _app: AppService) { }

  ngOnInit(): void {
    console.log('Detalle');
    this.getItemById();

  }


  getItemById (){
    this.route.paramMap.subscribe(params => {
      if(params.has('id')){
        this.idItem = params.get('id');
        this._app.getItemById( this.idItem ).subscribe( res =>{
          const data = res;
          if( !data ){
            return
          }
          console.log(data);

          this.objItem = data;
        })
      }

    });

  }

}
