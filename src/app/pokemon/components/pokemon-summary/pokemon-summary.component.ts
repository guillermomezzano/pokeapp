// src/app/pokemon/components/pokemon-summary/pokemon-summary.component.ts
import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-summary.component.html',
})
export class PokemonSummaryComponent implements OnInit {
  letterCount: { [key: string]: number } = {};

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getAllPokemons().subscribe((response) => {
      const allPokemons = response.results;

      // Inicializamos las letras A-Z
      for (let i = 65; i <= 90; i++) {
        this.letterCount[String.fromCharCode(i)] = 0;
      }

      // Contamos cuántos pokemons empiezan con cada letra
      allPokemons.forEach((p: any) => {
        const firstLetter = p.name.charAt(0).toUpperCase();
        if (this.letterCount[firstLetter] !== undefined) {
          this.letterCount[firstLetter]++;
        }
      });
    });
  }

  getLetters(): string[] {
    return Object.keys(this.letterCount).sort();
  }
}
