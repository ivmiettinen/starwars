import { Component, OnInit } from '@angular/core';

interface sidesObj {
  value: string;
  display: string;
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

  constructor() {}

  ngOnInit(): void {}
}
