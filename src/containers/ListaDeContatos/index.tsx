import Contato from '../../components/Contato'
import { Container } from './styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  return (
    <Container>
      <p>Existem 3 contatos em sua lista</p>
      <ul>
        {itens.map((c) => (
          <li key={c.titulo}>
            <Contato titulo={c.titulo} setor={c.setor} id={c.id} />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeContatos
