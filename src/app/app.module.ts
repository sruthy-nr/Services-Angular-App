import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerDataComponent } from './passenger-data/passenger-data.component';
import { UsPublicDataComponent } from './us-public-data/us-public-data.component';
import { PublicApiLinksDataComponent } from './public-api-links-data/public-api-links-data.component';
import { HttpClientModule } from "@angular/common/http";
import { UserInfoDataComponent } from './user-info-data/user-info-data.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserDataComponent } from './user-data/user-data.component';
import { TodoComponent } from './todo/todo.component';
import { QuotesComponent } from './quotes/quotes.component';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';

const myRoute:Routes=[
  {
    path:"",
    component:PassengerDataComponent
  },
  {
    path:"us",
    component:UsPublicDataComponent
  },
  {
    path:"api",
    component:PublicApiLinksDataComponent
  },
  {
    path:"ui",
    component:UserInfoDataComponent
  },
  {
    path:"pdt",
    component:ProductListComponent
  },
  {
    path:"ud",
    component:UserDataComponent
  },
  {
    path:"todo",
    component:TodoComponent
  },
  {
    path:"quote",
    component:QuotesComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    PassengerDataComponent,
    UsPublicDataComponent,
    PublicApiLinksDataComponent,
    UserInfoDataComponent,
    ProductListComponent,
    UserDataComponent,
    TodoComponent,
    QuotesComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
