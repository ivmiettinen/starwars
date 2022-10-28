import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { LogService } from './log.service';

interface charObj {
  name: string;
  side: string;
}


@Injectable()
export class StarWarsService {
  private characters: charObj[] = [
    { name: 'Luke Skywalker', side: 'light' },
    { name: 'Darth Vader', side: 'dark' },
  ];

  private logService: LogService;

  characterChanged = new Subject<void>();

  http: HttpClient;

  constructor(logService: LogService, http: HttpClient) {
    this.logService = logService;
    this.http = http;
  }

  fetchCharacters() {
    this.http
      .get('https://swapi.dev/api/people')
      .pipe(
        map((response) => {
          const data: any = response;
          const extractedChars = data.results;
          const chars = extractedChars.map((char: charObj) => {
            return { name: char.name, side: '' };
          });
          return chars;
        })
      )
      .subscribe((data) => {
        console.log('response: ', data);
        this.characters = data;
      });
  }

  getCharacters(chosenList: string) {
    if (chosenList === 'all') {
      //copy of original the list
      return this.characters.slice();
    }
    // this.characters = this.characters.map((p: any) => p.name)
    return this.characters.filter((c) => {
      return c.side === chosenList;
    });
  }

  onSideChosen(charInfo: any) {
    const pos = this.characters.findIndex((char) => {
      return char.name === charInfo.name;
    });
    this.characters[pos].side = charInfo.side;
    this.characterChanged.next();
    this.logService.WriteLog(
      'Changed side of ' + charInfo.name + ', new side: ' + charInfo.side
    );
  }

  addCharacter(name: string, side: string) {
    const pos = this.characters.findIndex((char) => {
      return char.name === name;
    });

    if (pos !== -1) {
      return;
    }

    const newChar = { name: name, side: side };
    this.characters.push(newChar);
  }
}
