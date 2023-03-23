import { createSelector } from "reselect"

const selectCartSlice = state => state.cart

export const selectCartItemsInSlice = createSelector([selectCartSlice], (selectCartSlice) => selectCartSlice.cartItems)

export const selectIsCartOpenInSlice = createSelector([selectCartSlice], (selectCartSlice)=>selectCartSlice.isCartOpen)

export const selectTotalQuantity = createSelector([selectCartItemsInSlice],(selectCartItemsInSlice)=> selectCartItemsInSlice.reduce((total, cartItem) => total + cartItem.quantity, 0))

export const selectTotalPrice = createSelector([selectCartItemsInSlice],(selectCartItemsInSlice)=> selectCartItemsInSlice.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0))
