import React from 'react'
import './Checkout.styles.scss'
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotalCost } from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/CheckoutItem'

const CheckoutPage = () => {
    const cartItems = useSelector(selectCartItems)
    const cartTotalCost = useSelector(selectCartTotalCost)

    const checkoutBlocks = ['Product', 'Description', 'Quantity', 'Price', 'Remove']

    return (
        <div className='checkout-page'>
            <div className="checkout-header">
                {
                    checkoutBlocks.map(block => (
                        <div className="checkout-block" key={block}>
                            <span>{block}</span>
                        </div>
                    ))
                }
            </div>
            {
                cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
            }
            <div className="total">
                TOTAL: ${cartTotalCost}
            </div>
        </div>
    )
}

export default CheckoutPage