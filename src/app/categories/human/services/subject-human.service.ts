import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Human} from '../models/Human';

@Injectable({
  providedIn: 'root'
})
export class SubjectHumanService {

  private humanInputContext = new BehaviorSubject<Human>(null);

  constructor() { }

  getNewHumanInputContext(): BehaviorSubject<Human> {
    return this.humanInputContext;
  }

  setNewHumanInputContext(newHumanContext: Human): void {
    this.humanInputContext.next(newHumanContext);
  }

}
