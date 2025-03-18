import { Produto } from '../types'
import ProdutoComponent from '../components/Produto/ProdutoComponent'
import * as S from './styles'
import { FavoritesState } from '../slices/favoritesSlice'

type Props = {
  produtos: Produto[]
  favoritos: FavoritesState
  favoritar: (produto: Produto) => void
  adicionarAoCarrinho: (produto: Produto) => void
}

const ProdutosComponent = ({
  produtos,
  favoritos,
  adicionarAoCarrinho,
  favoritar
}: Props) => {
  const produtoEstaNosFavoritos = (produto: Produto): boolean => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)
    return IdsDosFavoritos.includes(produtoId)
  }

  return (
    <>
      <S.Produtos>
        {produtos.map((produto) => (
          <ProdutoComponent
            key={produto.id}
            produto={produto}
            favoritar={favoritar}
            adicionarAoCarrinho={adicionarAoCarrinho}
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
