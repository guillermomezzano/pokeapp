import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';

//components
import { FavoriteDialogComponent } from '../../../shared/components/favorite-dialog/favorite-dialog.component';

//services
import { PokemonService } from '../../../services/pokemon.service';

//mui
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  favoritePokemon$: Observable<any>;

  constructor(
    private pokemonService: PokemonService,
    private dialog: MatDialog
  ) {
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
