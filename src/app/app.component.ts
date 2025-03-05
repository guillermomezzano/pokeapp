// src/app/app.component.ts
import { Component } from '@angular/core';

// Importa los componentes standalone que usarás en este template
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
  selectedPokemonName: string = ''; // Inicializa el nombre del pokemon seleccionado
  // propiedad usada para comunicar el valor seleccionado desde el listado al detalle.

  onPokemonSelected(name: string) {
    this.selectedPokemonName = name;
  }
}
