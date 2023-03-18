import { CartItem } from '@/Models/CartItem'
import { createSlice } from '@reduxjs/toolkit'
import { current, produce } from 'immer'

import { store } from '@/Store'

const cart = createSlice({
  name: 'cart',
  initialState: { cartItems: [] } as CartState,
  reducers: {
    addToCart: (state, { payload }) => {
      console.log('payload', payload)
      state.cartItems = [...state.cartItems, payload]
    },
    removeFromCart: (state, { payload: index }) => {
      const currentCart = state.cartItems

      if (currentCart !== null) {
        console.log('currentCartlenght', currentCart.length)
        let newCart: CartItem[] = [...currentCart]
        console.log('removeFromCart index', index)

        const nextState = produce(state.cartItems, (draft) => {
          //   console.log('remoed cart', current(state.cartItems))
          if (draft !== null) {
            const torem = draft.splice(index, 1)

            console.log('remoed cart', current(draft))
            console.log('torem', torem)
          }
        })

        console.log('nextstate len', nextState.length)
        state.cartItems = nextState
      } else {
        state.cartItems = []
      }
      //   console.log('removefromcart', state.cartItems)
    },
    clearCart: (state) => {
      state.cartItems = []
    },
  },
})

export const { addToCart, removeFromCart, clearCart } = cart.actions

export default cart.reducer

export type CartState = {
  cartItems: CartItem[] | null
}

type CartPayload = {
  payload: Partial<CartState>
}
