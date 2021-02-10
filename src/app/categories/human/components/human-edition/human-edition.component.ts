import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Human} from '../../models/Human';
import {FormBuilder, FormControl, FormGroup, FormsModule} from '@angular/forms';

@Component({
  selector: 'app-human-edition',
  templateUrl: './human-edition.component.html',
  styleUrls: ['./human-edition.component.css']
})
export class HumanEditionComponent implements OnInit {

  human: Human;
  humanEditionForm: FormGroup;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private formsModule: FormsModule,
              private formBuilder: FormBuilder) {
    this.activatedRoute.params.subscribe(value => {
      this.human = this.router.getCurrentNavigation().extras.state as Human;
    });
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.humanEditionForm = this.formBuilder.group({
      name: new FormControl(this.human.name),
      height: new FormControl(this.human.height),
      mass: new FormControl(this.human.mass),
      hair_color: new FormControl(this.human.hair_color),
      skin_color: new FormControl(this.human.skin_color),
      eye_color: new FormControl(this.human.eye_color),
      birth_year: new FormControl(this.human.birth_year),
      gender: new FormControl(this.human.gender),
      homeworld: new FormControl(this.human.homeworld),
      created: new FormControl(this.human.created),
      edited: new FormControl(this.human.edited),
    })
  }

}
