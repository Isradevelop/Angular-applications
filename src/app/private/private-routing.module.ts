import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';

const routes: Routes = [
  {
    path: 'private',
    component: LayoutComponent,
    children: [
      {
        path: 'heroes',
        loadChildren: () => import('./heroes-app/heroes-app.module').then(m => m.HeroesAppModule)
      },
      {
        path: 'countries',
        loadChildren: () => import('./countries-app/countries-app.module').then(m => m.CountriesAppModule)
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'private/countries'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
