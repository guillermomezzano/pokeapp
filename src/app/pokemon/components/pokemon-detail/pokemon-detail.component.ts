// src/app/pokemon/components/pokemon-detail/pokemon-detail.component.ts
import { Component, Input, OnChanges } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-detail.component.html',
})
export class PokemonDetailComponent implements OnChanges {
  @Input() pokemonName = '';
  pokemonDetail: any;

  constructor(private pokemonService: PokemonService) {}

  ngOnChanges(): void {
    // Cada vez que cambie pokemonName, cargamos detalle
    if (this.pokemonName) {
      this.loadDetail();
    }
  }

  loadDetail(): void {
    this.pokemonService
      .getPokemonDetail(this.pokemonName)
      .subscribe((detail) => {
        this.pokemonDetail = detail;
      });
  }

  setAsFavorite(): void {
    if (this.pokemonDetail) {
      this.pokemonService.setFavoritePokemon(this.pokemonDetail);
    }
  }
}
