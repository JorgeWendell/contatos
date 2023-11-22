import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../utils/enums/contatos'

type ContatoState = {
  itens: Contato[]
}

const initialState: ContatoState = {
  itens: [
    {
      id: 1,
      titulo: 'Jorge Wendell',
      setor: enums.Setor.TI
    },
    {
      id: 2,
      titulo: 'Richard Leon',
      setor: enums.Setor.ENGENHARIA
    },
    {
      id: 3,
      titulo: 'Carolina de Jesus',
      setor: enums.Setor.VENDAS
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ]
    }
  }
})

export const { remover } = contatosSlice.actions
export default contatosSlice.reducer
