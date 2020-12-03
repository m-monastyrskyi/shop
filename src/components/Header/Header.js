import React from 'react'
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './Header.styles'
import { ReactComponent as Logo } from '../../assets/shoes.svg'
import { auth } from '../../firebase/firebase.utils'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import CartIcon from '../CartIcon'
import CartDropdown from '../CartDropdown'
import { toast } from 'react-toastify'

const Header = () => {
    const currentUser = useSelector(selectCurrentUser)
    const isCartDropdownHidden = useSelector(selectCartHidden)

    const handleSignOutClick = () => {
        auth.signOut().then(() => toast.success('Successfully signed out'))
    }

    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className="logo"/>
            </LogoContainer>
            <OptionsContainer >
                <OptionLink to="/shop">SHOP</OptionLink>
                <OptionLink to="/shop">CONTACT</OptionLink>
                {
                    currentUser
                        ? <OptionLink as='a' onClick={handleSignOutClick}>Sign out</OptionLink>
                        : <OptionLink to="/signin">Sign in</OptionLink>
                }
                <CartIcon/>
            </OptionsContainer>
            {
                !isCartDropdownHidden && <CartDropdown/>
            }
        </HeaderContainer>
    )
}

export default Header