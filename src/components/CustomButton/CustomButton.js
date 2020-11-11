import React from 'react'
import './CustomButton.styles.scss'

const CustomButton = ({ children, isGoogleSignIn, inverted, loading, ...otherProps }) => {
    return (
        <button
            className={`${isGoogleSignIn && 'google-sign-in'} ${inverted && 'inverted'} custom-button `}
            disabled={loading}
            {...otherProps}
        >
            {
                loading ? '...Please wait' : children
            }
        </button>
    )
}

export default CustomButton