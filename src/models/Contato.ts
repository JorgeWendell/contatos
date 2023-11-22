import * as enums from '../utils/enums/contatos'

class Contato {
  titulo: string
  setor: enums.Setor
  id: number

  constructor(titulo: string, setor: enums.Setor, id: number) {
    this.titulo = titulo
    this.setor = setor
    this.id = id
  }
}

export default Contato
