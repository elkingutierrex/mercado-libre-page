import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { CardItemComponent } from './shared/components/card-item/card-item.component';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { CardItemDetailComponent } from './shared/components/card-item-detail/card-item-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardItemComponent,
    SearchBarComponent,
    HomeComponent,
    CardItemDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
