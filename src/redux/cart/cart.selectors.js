import { createSelector } from 'reselect'

export const selectCart = state => state.cart

export const selectCartItems = createSelector(
    selectCart,
    cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    selectCart,
    cart => cart.cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
)

export const selectCartTotalCost = createSelector(
    selectCart,
    cart => cart.cartItems.reduce((acc, cartItem) => acc + cartItem.price * cartItem.quantity, 0)
)

export const selectCartHidden = createSelector(
    selectCart,
    cart => cart.hidden
)