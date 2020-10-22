import React, { useEffect, useState } from 'react'
import './App.css'
import Homepage from './pages/homepage/'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ShopPage from './pages/shop'
import SignInAndSignUp from './pages/signInAndSignUp'
import Header from './components/Header'
import { auth } from './firebase/firebase.utils'

const App = () => {
    const [ currentUser, setCurrentUser ] = useState( null )

    useEffect( () => {
        const unsubscribe = auth.onAuthStateChanged( user => {
            setCurrentUser( user )
            console.log( user )
        } )
        return () => {
            unsubscribe()
        }
    }, [] )


    return <main>
        <Router>
            <Header currentUser={ currentUser }/>
            <Switch>
                <Route exact path={ '/' } component={ Homepage }/>
                <Route path={ '/shop' } component={ ShopPage }/>
                <Route path={ '/signin' } component={ SignInAndSignUp }/>
            </Switch>
        </Router>
    </main>
}


export default App
