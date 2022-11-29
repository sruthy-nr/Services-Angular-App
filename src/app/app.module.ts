import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerDataComponent } from './passenger-data/passenger-data.component';
import { UsPublicDataComponent } from './us-public-data/us-public-data.component';
import { PublicApiLinksDataComponent } from './public-api-links-data/public-api-links-data.component';
import { HttpClientModule } from "@angular/common/http";
import { UserInfoDataComponent } from './user-info-data/user-info-data.component';

@NgModule({
  declarations: [
    AppComponent,
    PassengerDataComponent,
    UsPublicDataComponent,
    PublicApiLinksDataComponent,
    UserInfoDataComponent
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
