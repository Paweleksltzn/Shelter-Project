import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShelterListModule } from './ShelterList/list.module';
import {AppRoutingModule} from './app.routing.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './shared/navigation/header.component';
import {AuthModule} from './auth/auth.module';
import { StoreModule } from '@ngrx/store';
import * as AppState from './shared/main-ngrx';
import {HttpClientModule} from '@angular/common/http';
import { AuthService } from './auth/auth.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShelterListModule,
    StoreModule.forRoot(AppState.reducers),
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
