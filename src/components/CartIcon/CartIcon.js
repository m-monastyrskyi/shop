import React from 'react'
import './CartIcon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

const CartIcon = () => {
    const dispatch = useDispatch()
    const itemsCount = useSelector(selectCartItemsCount)

    return (
        <div className='cart-icon' onClick={() => dispatch(toggleCartHidden())}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{itemsCount}</span>
        </div>
    )
}

export default CartIcon