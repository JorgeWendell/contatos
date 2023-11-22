import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Busca type="text" placeholder="Buscar Contato" />
    </div>
    <S.Filtros>
      <FiltroCard legenda="Vendas" contador={1} />
      <FiltroCard legenda="RH" contador={1} />
      <FiltroCard legenda="Financeiro" contador={1} />
      <FiltroCard legenda="Producao" contador={1} />
      <FiltroCard legenda="Qualidade" contador={1} />
      <FiltroCard legenda="Diretoria" contador={1} />
      <FiltroCard legenda="Engenharia" contador={1} />
      <FiltroCard legenda="TI" contador={1} ativo />
    </S.Filtros>
  </S.Aside>
)

export default BarraLateral
