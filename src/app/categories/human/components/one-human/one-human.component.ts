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

  constructor() { }

  ngOnInit(): void {
    console.log(this.human.url.split('/').reverse()[1]);
  }

}
