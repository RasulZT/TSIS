import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./core/guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home/home.module').then(m => m.HomeModule),
        data: {preload: true},
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('./auth/auth.module').then(m => m.AuthModule),
        data: {preload: true},
      },
      {
        path: 'user',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./UserInterface/userpage/userpage.module').then(m => m.UserpageModule),
        data: {preload: true},
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
