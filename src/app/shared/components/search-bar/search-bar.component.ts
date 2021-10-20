import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupName } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  txtSearch : string = '';


  constructor( private router : Router) {

   }

  ngOnInit(): void {

  }


  redirectToUrlWithQuery( txtSearch:string ){
    const timeOut =50;
    setTimeout(() => {
      this.router.navigate(['/home/items'], { queryParams: { search: this.txtSearch }, queryParamsHandling:'merge'} );
    }, timeOut);
  }

}
