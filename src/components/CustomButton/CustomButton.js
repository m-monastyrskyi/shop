import React from 'react'
import { CustomButtonContainer } from './CustomButton.styles'

const CustomButton = ({ children, loading, ...props }) => {
    return (
        <CustomButtonContainer {...props}>
            {
                loading ? '...Please wait' : children
            }
        </CustomButtonContainer>
    )
}

export default CustomButton