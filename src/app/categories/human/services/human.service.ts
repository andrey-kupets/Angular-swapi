import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {baseUrl} from '../api/people-api';
import {People} from '../models/People';

@Injectable({
  providedIn: 'root'
})
export class HumanService {

  constructor(private httpClient: HttpClient) { }

  getAllPeople(): Observable<People> {
    return this.httpClient.get<People>(baseUrl);
  }
}
