
export interface UserOptions {
  email:string,
  password: string
}

export interface DoarPedidos {
  titulo:string,
  descricao: string,
  tipo: string
}

export interface EventoPedidos {
  titulo:string,
  descricao: string,
  data: string,
  horarioInicio: string,
  horarioFim: string
}

export interface MapaPedidos {
  titulo:string,
  descricao: string,
  lat: string,
  long: string,
  horarioInicio: string,
  horarioFim: string
}