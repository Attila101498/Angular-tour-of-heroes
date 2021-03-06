import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/_models/hero';
import { HeroService } from 'src/app/_services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  // Az itt meghívott metódusok a komponens betöltésekor automatikusan lefutnak
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getAllHeroes()
        .subscribe(data => this.heroes = data);
  }

}
