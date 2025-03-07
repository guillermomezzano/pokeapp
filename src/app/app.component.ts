import { Component } from '@angular/core';

// components
import { HeaderComponent } from './core/components/header/header.component';
import { PokemonListComponent } from './pokemon/components/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon/components/pokemon-detail/pokemon-detail.component';
import { PokemonSummaryComponent } from './pokemon/components/pokemon-summary/pokemon-summary.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    PokemonSummaryComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  selectedPokemonName: string = '';

  onPokemonSelected(name: string) {
    this.selectedPokemonName = name;
  }
}
