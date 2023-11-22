import { useState } from 'react'
import * as S from './styles'
import * as enums from '../../utils/enums/contatos'
import { useDispatch } from 'react-redux'
import { remover } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({ titulo, setor, id }: Props) => {
  const dispath = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')
  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag setor={setor}>{setor}</S.Tag>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Ramal</th>
            <th scope="col">Email</th>
            <th scope="col">Cargo</th>
            <th scope="col">Celular</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"
            onChange={evento => setDescricao(evento.target.value)}>6201</th>
            <td>teste@teste.com.br</td>
            <td>Engenheiro III</td>
            <td>(11)99999-9999</td>
            {estaEditando ? (
              <>
                <td>
                  <S.BotaoSalvar>Salvar</S.BotaoSalvar>
                </td>
                <td>
                  <S.BotaoCancelarRemover
                    onClick={() => setEstaEditando(false)}
                  >
                    Cancelar
                  </S.BotaoCancelarRemover>
                </td>
              </>
            ) : (
              <>
                <td>
                  <S.Botao onClick={() => setEstaEditando(true)}>
                    Editar
                  </S.Botao>
                </td>
                <td>
                  <S.BotaoCancelarRemover onClick={() => dispath(remover(id))}>
                    Remover
                  </S.BotaoCancelarRemover>
                </td>
              </>
            )}
          </tr>
        </tbody>
      </table>
    </S.Card>
  )
}
export default Contato
