import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';

import { ListComponent } from './app.List';

import { ShowComponent } from './app.show';

import { ModalModule } from 'ng2-bootstrap/modal';

ShowComponent
@NgModule({
  
declarations: [
    AppComponent,
   
 ListComponent,
    ShowComponent
  ],
 
 imports: [
    BrowserModule,
    FormsModule,
 
   HttpModule,
    RouterModule.forRoot([
      {path:'List',component:ListComponent },

       {path:'Show',component:ShowComponent }
    ]),
   ModalModule.forRoot()
  ],
 
 providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
