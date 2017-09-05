import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import{ RouteModule } from './shared/route/route.module'; 

import {AuthenticationService, User} from './shared/authenticate.service';

import { ShowhideService } from './shared/showhide.service';
import { MovieComponent } from './movie/movie.component'; 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  RouteModule,
    ReactiveFormsModule,
  ],
  providers: [AuthenticationService,ShowhideService],
  bootstrap: [AppComponent]
})
export class AppModule { }
