import React from 'react'
import { Produto } from '../../types'
import { paraReal } from '../../utils/formatadores'
import * as S from './styles'
import { FavoritesState } from '../../slices/favoritesSlice'

type Props = {
  itensNoCarrinho: Produto[]
  favoritos: FavoritesState
}

const Header = ({ itensNoCarrinho, favoritos }: Props) => {
  const valorTotal = itensNoCarrinho.reduce(
    (total, item) => total + item.preco,
    0
  )

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{itensNoCarrinho.length} itens no carrinho</span>
        <span>Total: {paraReal(valorTotal)}</span>
        <span>{favoritos.length} favoritos</span>
      </div>
    </S.Header>
  )
}

export default Header
