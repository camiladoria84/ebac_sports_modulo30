import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../slices/apiSlice'
import cartReducer from '../slices/cartSlice'
import favoritesReducer from '../slices/favoritesSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartReducer,
    favorites: favoritesReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
