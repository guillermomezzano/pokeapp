export interface PokemonDetail {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
    [key: string]: any; // Para no romper si hay más propiedades en 'sprites'
  };
}
