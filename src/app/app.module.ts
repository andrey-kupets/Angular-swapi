import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { HellComponent } from './categories/human/components/hell/hell.component';

const routes: Routes = [
  {path: 'people', loadChildren: () => import('./categories/human/modules/human/human.module')
      .then(m => m.HumanModule)},
  {path: 'planets', loadChildren: () => import('./categories/planet/modules/planet/planet.module')
      .then(m => m.PlanetModule)},
  {path: 'starships', loadChildren: () => import('./categories/starship/modules/starship/starship.module')
      .then(m => m.StarshipModule)},
];

@NgModule({
  declarations: [AppComponent, HellComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
  ],
  exports: [RouterModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
