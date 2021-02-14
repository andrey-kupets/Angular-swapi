import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Human} from '../models/Human';

@Injectable({
  providedIn: 'root'
})
export class SubjectHumanService {

  private humanEditionContext = new BehaviorSubject<Human>(null);

  constructor() { }

  getNewHumanEditionContext(): BehaviorSubject<Human> {
    return this.humanEditionContext;
  }

  setNewHumanEditionContext(newHumanContext: Human): void {
    this.humanEditionContext.next(newHumanContext);
  }

}
