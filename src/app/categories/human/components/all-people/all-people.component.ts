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

    // var2 - without resolve.service
    // this.humanService.getAllPeople().subscribe(value => {
    //   this.people = value;
    //   console.log(this.people);
    // });
  }

  ngOnInit(): void {

  }

}
