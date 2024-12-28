export type ApiResponseMovies = {
    data: Movies[]
  }
  
export interface Movies {
    id: number
    nome: string
    sinopse: string,
    foto: string
  }
  