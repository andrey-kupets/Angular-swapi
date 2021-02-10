import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HumanService} from '../../services/human.service';
import {People} from '../../models/People';

@Component({
  selector: 'app-all-people',
  templateUrl: './all-people.component.html',
  styleUrls: ['./all-people.component.css']
})
export class AllPeopleComponent implements OnInit {

  people: People;

  constructor(private activatedRoute: ActivatedRoute, private humanService: HumanService) {
    this.activatedRoute.data.subscribe(value => this.people = value.humanDataRequest);
    console.log(this.people);
    // @ts-ignore
    // in this way will have to change an entrance object
    // for (let i = 0; i < this.people.results.length; i++) {
    //   this.people.results[i].id = +this.people.results[i].url.split('/').reverse()[1];
    // }

    // var2 - without resolve.service
    // this.humanService.getAllPeople().subscribe(value => {
    //   this.people = value;
    //   console.log(this.people);
    // });
  }

  ngOnInit(): void {

  }

}
