import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import CustomButton from '../CustomButton'
import CartItem from '../CartItem'
import './CartDropdown.styles.scss'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItems } from '../../redux/cart/cart.selectors'

const CartDropdown = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    const history = useHistory()

    const handleCloseDropdown = e => {
        if ( !document.querySelector('.cart-dropdown').contains(e.target) ) {
            dispatch(toggleCartHidden())
        }
    }

    useEffect(() => {
        window.addEventListener('click', handleCloseDropdown)
        return () => window.removeEventListener('click', handleCloseDropdown)
    }, [])

    const handleCheckoutClick = () => {
        dispatch(toggleCartHidden())
        history.push('/checkout')
    }

    return (
        <div className='cart-dropdown'>
            <div className="cart-items">
                {
                    cartItems.length
                        ? cartItems.map(item => <CartItem key={item.id} item={item}/>)
                        : <span className='empty-message'>Your cart is empty</span>
                }
            </div>
            <CustomButton onClick={handleCheckoutClick}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropdown