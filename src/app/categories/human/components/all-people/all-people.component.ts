import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HumanService} from '../../services/human.service';
import {People} from '../../models/People';
import {SubjectHumanService} from '../../services/subject-human.service';
import {Human} from '../../models/Human';

@Component({
  selector: 'app-all-people',
  templateUrl: './all-people.component.html',
  styleUrls: ['./all-people.component.css']
})
export class AllPeopleComponent implements OnInit {

  people: People;

  constructor(private activatedRoute: ActivatedRoute,
              private humanService: HumanService,
              private subjectHumanService: SubjectHumanService) {
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
    this.subjectHumanService.getNewHumanEditionContext().subscribe(editedHuman => {
      if (!!editedHuman) {
        const updatedPeopleResults = this.people.results.filter(({url}) => editedHuman.url !== url);
        updatedPeopleResults.push(editedHuman);
        updatedPeopleResults.sort((a, b) => +a.url.split('/').reverse()[1] - +b.url.split('/').reverse()[1]);
        this.people.results = updatedPeopleResults;
      }
    });
  }

}
