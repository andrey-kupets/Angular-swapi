import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HumanRoutingModule} from '../human-routing/human-routing.module';
import {AllPeopleComponent} from '../../components/all-people/all-people.component';
import {HttpClientModule} from '@angular/common/http';
import {HumanService} from '../../services/human.service';
import {OneHumanComponent} from '../../components/one-human/one-human.component';


@NgModule({
  declarations: [
    AllPeopleComponent,
    OneHumanComponent,
  ],
  imports: [
    CommonModule,
    HumanRoutingModule,
    HttpClientModule,
  ],
  exports: [HttpClientModule],
  providers: [HumanService]
})
export class HumanModule { }