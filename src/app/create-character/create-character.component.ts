import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

interface sidesObj {
  value: string;
  display: string;
}

interface formTypes {
  name: string;
  side: string;
}

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css'],
})
export class CreateCharacterComponent implements OnInit {
  availablesides: sidesObj[] = [
    { display: 'None', value: '' },
    { display: 'Light', value: 'light' },
    { display: 'Dark', value: 'dark' },
  ];

  swService: StarWarsService;

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  ngOnInit(): void {}

  onSubmit(submittedForm: { invalid: boolean | null; value: formTypes }) {
    console.log('submittedForm.value.invalid ', submittedForm.invalid);
    if (submittedForm.invalid) {
      return;
    }
    // console.log('type of ', typeof submittedForm);
    console.log('submittedForm!:', submittedForm);
    this.swService.addCharacter(
      submittedForm.value.name,
      submittedForm.value.side
    );
  }
}
