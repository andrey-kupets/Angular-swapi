import {Component, Input, OnInit} from '@angular/core';
import {Human} from '../../models/Human';

@Component({
  selector: 'app-one-human',
  templateUrl: './one-human.component.html',
  styleUrls: ['./one-human.component.css']
})
export class OneHumanComponent implements OnInit {

  @Input()
  human: Human;
  id: number;


  constructor() { }

  ngOnInit(): void {
    // get id# ---- ser in all-people comp-t
    // console.log((this.human.url.split('/')[this.human.url.split('/').length-2]));
    // or --- human.url.split('/').reverse()[1]
    this.id = +this.human.url.split('/').reverse()[1];

  }

}
