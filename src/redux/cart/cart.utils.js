export const addItemToCart = (cartItems, newItem) => {
    const existingCartItem = cartItems.find(item => item.id === newItem.id)

    if ( existingCartItem ) {
        existingCartItem.quantity++
        return cartItems
    }
    return [...cartItems, { ...newItem, quantity: 1 }]
}