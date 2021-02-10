import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllPeopleComponent} from '../../components/all-people/all-people.component';
import { HumanDetailsComponent } from '../../components/human-details/human-details.component';
import {HumanResolveService} from '../../services/human-resolve.service';

const routes: Routes = [
  {path: '', component: AllPeopleComponent, resolve: {humanDataRequest: HumanResolveService}, children: [
      {path: ':id', component: HumanDetailsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HumanRoutingModule { }
