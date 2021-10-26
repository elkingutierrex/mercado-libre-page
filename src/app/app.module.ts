import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { CardItemComponent } from './shared/components/card-item/card-item.component';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { CardItemDetailComponent } from './shared/components/card-item-detail/card-item-detail.component';
import { BreadcrumbComponent } from './shared/components/breadcrumb/breadcrumb.component';
import { ProductItemsComponent } from './pages/product-items/product-items.component';
import { ItemDetailComponent } from './pages/product-items/item-detail/item-detail.component';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from './shared/components/pagination/pagination.component';
import { CarouselComponent } from './shared/components/carousel/carousel.component';
import { NumberFormatPipe } from './pipes/number-format.pipe';
import { NoDataComponent } from './shared/components/no-data/no-data.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardItemComponent,
    SearchBarComponent,
    HomeComponent,
    CardItemDetailComponent,
    BreadcrumbComponent,
    ProductItemsComponent,
    ItemDetailComponent,
    PaginationComponent,
    CarouselComponent,
    NumberFormatPipe,
    NoDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
