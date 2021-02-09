import { NgModule } from '@angular/core';
import {AllPlanetsComponent} from '../../components/all-planets/all-planets.component';
import {PlanetRoutingModule} from '../planet-routing/planet-routing.module';



@NgModule({
  declarations: [AllPlanetsComponent],
  imports: [PlanetRoutingModule]
})
export class PlanetModule { }
