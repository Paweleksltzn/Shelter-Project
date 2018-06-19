import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ListComponent } from './ShelterList/list/list.component';



const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'register',
    loadChildren: './auth/auth.module#AuthModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
