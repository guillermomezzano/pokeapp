// src/app/pokemon/components/pokemon-summary/pokemon-summary.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

//interface
import { SummaryData } from './interface';
import { PokemonListResponse } from '../../../interface/pokemon-response.interface';

//services
import { PokemonService } from '../../../services/pokemon.service';

//mui
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-pokemon-summary',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './pokemon-summary.component.html',
})
export class PokemonSummaryComponent implements OnInit {
  letterCount: { [key: string]: number } = {};
  dataSource: SummaryData[] = [];
  displayedColumns: string[] = ['letter', 'count'];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService
      .getAllPokemons()
      .subscribe((response: PokemonListResponse) => {
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

        this.dataSource = Object.keys(this.letterCount)
          .sort()
          .map((letter) => ({
            letter,
            count: this.letterCount[letter],
          }));
      });
  }

  // getLetters(): string[] {
  //   return Object.keys(this.letterCount).sort();
  // }
}
