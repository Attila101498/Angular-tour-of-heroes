import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/_models/hero';
import { HEROES } from 'src/app/_models/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero?: Hero;

  constructor() { }

  ngOnInit(): void {
    // Az itt meghívott metódusok a komponens betöltésekor automatikusan 
    // lefutnak
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
