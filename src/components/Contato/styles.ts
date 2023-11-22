import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import * as enums from '../../utils/enums/contatos'

type TagProps = {
  setor?: enums.Setor
}

function retornaCorDeFundo(props: TagProps): string {
  if ('setor' in props) {
    if (props.setor === enums.Setor.VENDAS) return variaveis.amarelo2
    if (props.setor === enums.Setor.RH) return variaveis.amarelo
    if (props.setor === enums.Setor.FINANCEIRO) return variaveis.azul
    if (props.setor === enums.Setor.PRODUCAO) return variaveis.blush
    if (props.setor === enums.Setor.QUALIDADE) return variaveis.verde
    if (props.setor === enums.Setor.DIRETORIA) return variaveis.vermelho
    if (props.setor === enums.Setor.ENGENHARIA) return variaveis.mantis
  }
  return '#ccc'
}

export const Card = styled.div`
  background-color: #b8acac;
  box-shadow: 0px, 4px, 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
`
export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  font-size: 10px;
  color: #fff;
  font-weight: bold;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
`

export const Botao = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`
export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
