import React from 'react'
import './Checkout.styles.scss'
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotalCost } from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/CheckoutItem'
import StripeCheckoutButton from '../../components/StripeCheckoutButton'

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
            {
                cartTotalCost > 0 && <>
                    <div className="test-warning">
                        *Please use the following test credit card for payments*<br/>
                        4242 4242 4242 4242 - exp: 12/21 - CVV: 123
                    </div>
                    <StripeCheckoutButton price={cartTotalCost}/>
                </>
            }
        </div>
    )
}

export default CheckoutPage