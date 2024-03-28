import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';
import { authMatchGuard } from './auth/guards/auth-match.guard';
import { privateMatchGuard } from './auth/guards/private-match.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canMatch: [privateMatchGuard]
  },
  {
    path: '',
    loadChildren: () => import('./private/private.module').then(m => m.PrivateModule),
    canMatch: [authMatchGuard]
  },
  {
    path: '404',
    component: Error404PageComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
