import React from 'react'
import './Header.styles.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/shoes.svg'
import { auth } from '../../firebase/firebase.utils'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/user/user.reducer'
import CartIcon from '../CartIcon'
import CartDropdown from '../CartDropdown'
import { selectCartHidden } from '../../redux/cart/cart.selectors'



const Header = () => {
    const currentUser = useSelector(selectUser)
    const isCartDropdownHidden = useSelector(selectCartHidden)

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
                        ? <a className='option' onClick={() => auth.signOut()}>Sign out</a>
                        : <Link className='option' to="/signin">Sign in</Link>
                }
                <CartIcon />
            </nav>
            {
                !isCartDropdownHidden && <CartDropdown />
            }
        </header>
    )
}

export default Header