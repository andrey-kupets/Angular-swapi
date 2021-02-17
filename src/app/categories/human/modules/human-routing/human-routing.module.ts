import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllPeopleComponent} from '../../components/all-people/all-people.component';
import { HumanDetailsComponent } from '../../components/human-details/human-details.component';
import {HumanResolveService} from '../../services/human-resolve.service';
import {HumanEditionComponent} from '../../components/human-edition/human-edition.component';
import {NewHumanComponent} from '../../components/new-human/new-human.component';

const routes: Routes = [
  {path: '', component: AllPeopleComponent, resolve: {humanDataRequest: HumanResolveService}, children: [
      {path: ':id', component: HumanDetailsComponent, children: [
          {path: 'edition', component: HumanEditionComponent}, {path: 'creation', component: NewHumanComponent},
        ]},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HumanRoutingModule { }
