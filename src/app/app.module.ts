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

@NgModule({
  declarations: [
    AppComponent,
    PassengerDataComponent,
    UsPublicDataComponent,
    PublicApiLinksDataComponent,
    UserInfoDataComponent,
    ProductListComponent,
    UserDataComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
