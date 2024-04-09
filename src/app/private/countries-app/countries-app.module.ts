import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesAppRoutingModule } from './countries-app-routing.module';
import { SharedModule } from './shared/shared.module';
import { SharedModule as AppSharedModule } from '../../shared/shared.module';
import { CurrencyPipeTsPipe } from './pipes/currency.pipe.ts.pipe';
import { JoinArrayPipeTsPipe } from './pipes/join-array.pipe';
import { SortCountryPipe } from './pipes/sort-country.pipe';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryListComponent } from './components/country-list/country-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BordersPageComponent } from './pages/borders-page/borders-page.component';


@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
    LayoutPageComponent,
    CountryPageComponent,
    CountryListComponent,
    BordersPageComponent,

    CurrencyPipeTsPipe,
    JoinArrayPipeTsPipe,
    SortCountryPipe,
  ],
  imports: [
    AppSharedModule,
    CommonModule,
    CountriesAppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class CountriesAppModule { }
