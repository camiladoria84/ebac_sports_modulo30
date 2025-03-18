import { useDispatch, useSelector } from 'react-redux'
import { useGetProdutosQuery } from './slices/apiSlice'
import { RootState } from './store'
import { GlobalStyle } from './styles'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { addToCart } from './slices/cartSlice'
import { toggleFavorite, FavoritesState } from './slices/favoritesSlice'
import { Produto } from './types'

function App() {
  const dispatch = useDispatch()
  const { data: produtos, isLoading } = useGetProdutosQuery()
  const carrinho = useSelector((state: RootState) => state.cart)
  const favoritos: FavoritesState = useSelector(
    (state: RootState) => state.favorites
  )

  function adicionarAoCarrinho(produto: Produto) {
    dispatch(addToCart(produto))
  }

  function favoritar(produto: Produto) {
    dispatch(toggleFavorite(produto))
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header itensNoCarrinho={carrinho} favoritos={favoritos} />
        {isLoading ? (
          <p>Carregando produtos...</p>
        ) : (
          <Produtos
            produtos={produtos || []}
            favoritos={favoritos}
            favoritar={favoritar}
            adicionarAoCarrinho={adicionarAoCarrinho}
          />
        )}
      </div>
    </>
  )
}

export default App
