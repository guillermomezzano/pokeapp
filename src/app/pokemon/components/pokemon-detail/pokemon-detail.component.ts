import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

//services
import { PokemonService } from '../../../services/pokemon.service';

//interface
import { PokemonDetail } from '../../../interface/pokemon-detail.interface';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-detail.component.html',
})
export class PokemonDetailComponent implements OnChanges {
  @Input() pokemonName: string = '';
  pokemonDetail: PokemonDetail | null = null;

  constructor(private pokemonService: PokemonService) {}

  ngOnChanges(): void {
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
