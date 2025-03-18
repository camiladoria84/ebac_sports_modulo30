import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../types'

type CartState = Produto[]

const initialState: CartState = []

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Produto>) => {
      if (!state.find((item) => item.id === action.payload.id)) {
        state.push(action.payload)
      }
    }
  }
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer
