import React from 'react'
import './CartIcon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItems } from '../../redux/cart/cart.reducer'

const CartIcon = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)

    return (
        <div className='cart-icon' onClick={() => dispatch(toggleCartHidden())}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{cartItems.length}</span>
        </div>
    )
}

export default CartIcon