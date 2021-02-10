import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HumanRoutingModule} from '../human-routing/human-routing.module';
import {AllPeopleComponent} from '../../components/all-people/all-people.component';
import {HttpClientModule} from '@angular/common/http';
import {HumanService} from '../../services/human.service';
import {OneHumanComponent} from '../../components/one-human/one-human.component';
import {HumanDetailsComponent} from '../../components/human-details/human-details.component';
import {HumanEditionComponent} from '../../components/human-edition/human-edition.component';
import {NewHumanComponent} from '../../components/new-human/new-human.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'; // пересмотреть с главным аппом


@NgModule({
  declarations: [
    AllPeopleComponent,
    OneHumanComponent,
    HumanDetailsComponent,
    HumanEditionComponent,
    NewHumanComponent,
],
  imports: [
    CommonModule,
    HumanRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [HttpClientModule],
  providers: [HumanService]
})
export class HumanModule { }
