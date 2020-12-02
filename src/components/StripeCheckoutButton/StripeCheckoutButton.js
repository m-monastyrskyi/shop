import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { clearAllItemsFromCart } from '../../redux/cart/cart.actions'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
    const dispatch = useDispatch()

    const onToken = token => {
        toast.success('Payment successful')
        console.log(token)
        dispatch(clearAllItemsFromCart())
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Cool SHOP'
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton