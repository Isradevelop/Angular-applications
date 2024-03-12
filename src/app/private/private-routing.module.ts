import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'heroes',
        loadChildren: () => import('./heros-app/heros-app.module').then(m => m.HerosAppModule)
      },
      {
        path: 'countries',
        loadChildren: () => import('./countries-app/countries-app.module').then(m => m.CountriesAppModule)
      },
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
