import { FavoriteDialogComponent } from '../../../shared/components/favorite-dialog/favorite-dialog.component';
import { Component } from '@angular/core';
import { PokemonService } from '../../../pokemon/services/pokemon.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  // En vez de un valor fijo, exponemos el Observable
  favoritePokemon$: Observable<any>;

  constructor(
    private pokemonService: PokemonService,
    private dialog: MatDialog
  ) {
    // Asignamos el Observable directamente
    this.favoritePokemon$ = this.pokemonService.favoritePokemon$;
  }

  showFavoriteDetail(pokemon: any) {
    if (pokemon) {
      this.dialog.open(FavoriteDialogComponent, {
        data: { pokemon },
        width: '400px',
      });
    }
  }
}
