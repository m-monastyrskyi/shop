import React from 'react'
import './Header.styles.scss'
import { Link } from 'react-router-dom'
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
        <header className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo"/>
            </Link>
            <nav className="options">
                <Link to="/shop" className="option">SHOP</Link>
                <Link to="/shop" className="option">CONTACT</Link>
                {
                    currentUser
                        ? <a className='option' onClick={handleSignOutClick}>Sign out</a>
                        : <Link className='option' to="/signin">Sign in</Link>
                }
                <CartIcon/>
            </nav>
            {
                !isCartDropdownHidden && <CartDropdown/>
            }
        </header>
    )
}

export default Header