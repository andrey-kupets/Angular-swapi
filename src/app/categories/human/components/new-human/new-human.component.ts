import { Component, OnInit } from '@angular/core';
import {Human} from '../../models/Human';
import {AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {SubjectHumanService} from '../../services/subject-human.service';
import {stopWords} from '../../data/stopWords';

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
      name: new FormControl(this.human.name, [this.stopWordsVal, this.minLengthVal, this.maxLengthVal, this.voidVal]),
      height: new FormControl(this.human.height, [this.stopWordsVal, this.maxLengthVal, this.voidVal]),
      mass: new FormControl(this.human.mass, [this.stopWordsVal, this.maxLengthVal, this.voidVal]),
      hair_color: new FormControl(this.human.hair_color, [this.stopWordsVal, this.maxLengthVal, this.voidVal]),
      skin_color: new FormControl(this.human.skin_color, [this.stopWordsVal, this.maxLengthVal, this.voidVal]),
      eye_color: new FormControl(this.human.eye_color, [this.stopWordsVal, this.maxLengthVal, this.voidVal]),
      birth_year: new FormControl(this.human.birth_year, [this.stopWordsVal, this.minLengthVal, this.maxLengthVal, this.voidVal]),
      gender: new FormControl(this.human.gender, [this.stopWordsVal, this.maxLengthVal, this.voidVal]),
      homeworld: new FormControl(this.human.homeworld, [this.stopWordsVal, this.voidVal]),
      created: new FormControl(this.human.created, [this.stopWordsVal, this.minLengthVal, this.maxLengthVal, this.voidVal]),
      edited: new FormControl(this.human.edited, [this.stopWordsVal, this.minLengthVal, this.maxLengthVal, this.voidVal]),
      url: new FormControl(this.human.url, [this.stopWordsVal, this.voidVal]),
    });
  }

  saveForm(humanCreationForm): void {
    humanCreationForm.markAllAsTouched();
    if (humanCreationForm.status === 'VALID') {
      this.subjectHumanService.setNewHumanInputContext(humanCreationForm.value);
      console.log(humanCreationForm.value);
      this.router.navigate(['people', this.id]);
    }
  }

  goToDetails(): void {
    this.router.navigate(['people', this.id]);
  }

    // validators for the form

  stopWordsVal(inputData: AbstractControl): Error {
    let error = null;
    stopWords.map(word => {
      if (inputData.value.toLowerCase().includes(word)) {
        error = {error: true, msg: `this word is not allowed`};
      }
    });
    return error;
  }

  minLengthVal(inputData: AbstractControl): Error {
    let error = null;
    if (inputData.value.length < 4) {
      error = {error: true, msg: 'minimal length is 4'};
    }
    return error;
  }

  maxLengthVal(inputData: AbstractControl): Error {
    let error = null;
    if (inputData.value.length > 30) {
      error = {error: true, msg: 'maximum length is 20'};
    }
    return error;
  }

  voidVal(inputData: AbstractControl): Error {
    let error = null;
    if (inputData.value === '') {
      error = {error: true, msg: 'empty field is not allowed'};
    }
    return error;
  }
}
