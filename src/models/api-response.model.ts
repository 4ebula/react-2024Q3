export interface ApiResponse {
  name: string;
  weight: number;
  height: number;
  id: number;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      }
    }
  }
}
