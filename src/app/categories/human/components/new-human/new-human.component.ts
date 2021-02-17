import { Component, OnInit } from '@angular/core';
import {Human} from '../../models/Human';
import {FormBuilder, FormControl, FormGroup, FormsModule} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {SubjectHumanService} from '../../services/subject-human.service';

@Component({
  selector: 'app-new-human',
  templateUrl: './new-human.component.html',
  styleUrls: ['./new-human.component.css']
})
export class NewHumanComponent implements OnInit {

  human: Human;
  humanCreationForm: FormGroup;
  id: number;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private formsModule: FormsModule,
              private formBuilder: FormBuilder,
              private subjectHumanService: SubjectHumanService) {
    this.activatedRoute.params.subscribe(value => {
      this.human = this.router.getCurrentNavigation().extras.state as Human;
    });
  }

  ngOnInit(): void {
    this.initForm();
    this.id = +this.human.url.split('/').reverse()[1];
  }

  private initForm(): void {
    this.humanCreationForm = this.formBuilder.group({
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
      url: new FormControl(this.human.url),
    });
  }

  saveForm(humanEditionForm): void {
    this.subjectHumanService.setNewHumanInputContext(humanEditionForm.value);
    console.log(humanEditionForm.value);
    this.router.navigate(['people', this.id]);
  }

}
