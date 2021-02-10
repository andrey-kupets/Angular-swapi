import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllStarshipsComponent} from '../../components/all-starships/all-starships.component';

const routes: Routes = [
  {path: '', component: AllStarshipsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarshipRoutingModule { }
