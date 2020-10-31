import React from 'react'
import './Header.styles.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/shoes.svg'
import { auth } from '../../firebase/firebase.utils'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/user/user.reducer'


const Header = () => {
    const currentUser = useSelector(selectUser)

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
            </nav>

        </header>
    )
}

export default Header