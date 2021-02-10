import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllPlanetsComponent} from '../../components/all-planets/all-planets.component';

const routes: Routes = [
  {path: '', component: AllPlanetsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetRoutingModule { }
