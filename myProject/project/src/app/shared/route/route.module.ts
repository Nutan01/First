import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from 'app/login/login.component';

import { MovieComponent } from 'app/movie/movie.component';

//import { AddComponent } from '../add/add.component';
import { AppComponent } from 'app/app.component';

//import { EditComponent } from '../edit/edit.component';
const routes: Routes = [
//full : makes sure the path is absolute path
    { path: '', redirectTo: '/login', pathMatch: 'full'  },
   
    { path: 'login', component: LoginComponent },
    { path: 'movie', component: MovieComponent },
     //{ path: 'add', component: AddComponent },
     // { path: 'edit', component: EditComponent },
   
   
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteModule { }


