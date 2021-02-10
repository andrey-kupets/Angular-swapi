import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import {HumanService} from './human.service';
import {Observable} from 'rxjs';
import {People} from '../models/People';

@Injectable({
  providedIn: 'root'
})
export class HumanResolveService implements Resolve<People> {

  constructor(private humanService: HumanService) { }

  resolve(): Observable<People> | Promise<People> | People {
    return this.humanService.getAllPeople();
  }
}
