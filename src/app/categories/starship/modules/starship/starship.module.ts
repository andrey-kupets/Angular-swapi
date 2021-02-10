import { NgModule } from '@angular/core';
import {AllStarshipsComponent} from '../../components/all-starships/all-starships.component';
import {StarshipRoutingModule} from '../starship-routing/starship-routing.module';



@NgModule({
  declarations: [AllStarshipsComponent],
  imports: [StarshipRoutingModule]
})
export class StarshipModule { }
