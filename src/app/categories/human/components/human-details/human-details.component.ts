import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Human} from '../../models/Human';
import {SubjectHumanService} from '../../services/subject-human.service';

@Component({
  selector: 'app-human-details',
  templateUrl: './human-details.component.html',
  styleUrls: ['./human-details.component.css']
})
export class HumanDetailsComponent implements OnInit {

  human: Human;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private subjectNumanService: SubjectHumanService) {
    this.activatedRoute.params.subscribe(value => {
      this.human = this.router.getCurrentNavigation().extras.state as Human;
    });
  }

  ngOnInit(): void {
    this.subjectNumanService.getNewHumanEditionContext().subscribe(editedHuman => {
      editedHuman ? this.human = editedHuman : null;
    });
  }

  goToAddNewHuman(): void {
    this.router.navigate(['creation'], {relativeTo: this.activatedRoute, state: this.human});
  }
  goToEditHuman(): void {
    this.router.navigate(['edition'], {relativeTo: this.activatedRoute, state: this.human});
  }

  goToPeople(): void {
    this.router.navigate(['people']);
  }

}
