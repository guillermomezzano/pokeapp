export interface PokemonDetail {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
    [key: string]: any; // Para no romper si hay más propiedades en 'sprites'
  };
  // Si sabes de antemano que hay otras propiedades importantes, agrégalas aquí
  // abilities: any[];
  // base_experience: number;
  // ...
}
