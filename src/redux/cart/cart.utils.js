export const addItemToCart = (cartItems, newItem) => {
    const existingCartItem = cartItems.find(item => item.id === newItem.id)

    if ( existingCartItem ) {
        return cartItems.map(item =>
            item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        )
    }
    return [...cartItems, { ...newItem, quantity: 1 }]
}

export const removeItemFromCart = (cartItems, itemToRemove) => {
    const existingCartItem = cartItems.find(item => item.id === itemToRemove.id)

    if ( existingCartItem.quantity === 1 ) {
        return cartItems.filter(item => item.id !== itemToRemove.id)
    }

    return cartItems.map(item =>
        item.id === itemToRemove.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
    )
}