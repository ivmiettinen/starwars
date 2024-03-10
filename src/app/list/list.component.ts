import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsService } from '../star-wars.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit, OnDestroy {
  characters: object[] = [];

  activatedRoute: ActivatedRoute;

  swService: StarWarsService;

  loadingChars = true;

  loadedSide = 'all';

  subscription: any;

  charSubscription: any;

  constructor(activatedRoute: ActivatedRoute, swService: StarWarsService) {
    this.activatedRoute = activatedRoute;
    this.swService = swService;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.characters = this.swService.getCharacters(params['side']);
      this.loadedSide = params['side'];
      this.loadingChars = false;
    });
    this.subscription = this.swService.characterChanged.subscribe(() => {
      this.characters = this.swService.getCharacters(this.loadedSide);
    });

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
