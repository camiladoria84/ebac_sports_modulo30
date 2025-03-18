import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../types'

// Defina e exporte o tipo FavoritesState
export type FavoritesState = Produto[]

const initialState: FavoritesState = []

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<Produto>) => {
      const index = state.findIndex((item) => item.id === action.payload.id)
      if (index >= 0) {
        state.splice(index, 1)
      } else {
        state.push(action.payload)
      }
    }
  }
})

export const { toggleFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer
