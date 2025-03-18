import React from 'react'
import { Produto } from '../../types'
import ProdutoComponent from '../Produto/ProdutoComponent'
import { FavoritesState } from '../../slices/favoritesSlice'

type Props = {
  produtos: Produto[]
  adicionarAoCarrinho: (produto: Produto) => void
  favoritos: FavoritesState
  favoritar: (produto: Produto) => void
}

const Produtos = ({
  produtos,
  adicionarAoCarrinho,
  favoritos,
  favoritar
}: Props) => {
  return (
    <div>
      {produtos.map((produto) => (
        <ProdutoComponent
          key={produto.id}
          produto={produto}
          adicionarAoCarrinho={adicionarAoCarrinho}
          favoritar={favoritar}
          estaNosFavoritos={favoritos.some((fav) => fav.id === produto.id)}
        />
      ))}
    </div>
  )
}

export default Produtos
