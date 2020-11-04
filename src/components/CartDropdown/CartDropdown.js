import React, { useEffect } from 'react'
import CustomButton from '../CustomButton'
import CartItem from '../CartItem'
import './CartDropdown.styles.scss'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItems } from '../../redux/cart/cart.reducer'

const CartDropdown = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)

    const handleCloseDropdown = e => {
        if ( !document.querySelector('.cart-dropdown').contains(e.target) ) {
            dispatch(toggleCartHidden())
        }
    }

    useEffect(() => {
        window.addEventListener('click', handleCloseDropdown)
        return () => window.removeEventListener('click', handleCloseDropdown)
    }, [])

    return (
        <div className='cart-dropdown'>
            <div className="cart-items">
                {
                    cartItems.map(item => <CartItem key={item.id} item={item}/>)
                }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropdown