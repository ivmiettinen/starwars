import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  characters = [
    {name: 'Luke Skywalker', side: 'light'},
    {name: 'Darth Vader', side: 'dark'},
  ];

  chosenList = 'all';


  constructor() { }

  ngOnInit(): void {
  }

  onChoose(side: any){
    this.chosenList = side;
  }

  getCharacters(){

    if(this.chosenList === 'all'){
      //copy of original the list
      return this.characters.slice();
    }
    // this.characters = this.characters.map((p: any) => p.name)
    return this.characters.filter((c) => {
      return c.side === this.chosenList;

    });
  }

}
