import React from 'react'
import { Produto } from '../../types'
import * as S from './styles'
import { paraReal } from '../../utils/formatadores'

type Props = {
  produto: Produto
  adicionarAoCarrinho: (produto: Produto) => void
  favoritar: (produto: Produto) => void
  estaNosFavoritos: boolean
}

const ProdutoComponent: React.FC<Props> = ({
  produto,
  adicionarAoCarrinho,
  favoritar,
  estaNosFavoritos
}) => {
  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={() => favoritar(produto)} type="button">
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={() => adicionarAoCarrinho(produto)} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
