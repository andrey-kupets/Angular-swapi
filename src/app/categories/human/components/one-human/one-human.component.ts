import {Component, Input, OnInit} from '@angular/core';
import {Human} from '../../models/Human';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-one-human',
  templateUrl: './one-human.component.html',
  styleUrls: ['./one-human.component.css']
})
export class OneHumanComponent implements OnInit {

  @Input()
  human: Human;
  id: number;


  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // get id# ---- if you set in all-people comp-t --- it will have to change an entrance object
    // console.log((this.human.url.split('/')[this.human.url.split('/').length-2]));
    // or --- human.url.split('/').reverse()[1]
    this.id = +this.human.url.split('/').reverse()[1];
  }

  goToDetails(): void {
    this.router.navigate([this.id], {relativeTo: this.activatedRoute, state: this.human});
  }

}
