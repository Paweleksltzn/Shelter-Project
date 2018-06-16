import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShelterListModule } from './ShelterList/list.module';
import {AppRoutingModule} from './app.routing.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './shared/navigation/header.component';
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShelterListModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
