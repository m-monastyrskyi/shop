import React, { useEffect } from 'react'
import './App.css'
import Homepage from './pages/homepage/'
import { Switch, Route } from 'react-router-dom'
import ShopPage from './pages/shop'
import SignInAndSignUp from './pages/signInAndSignUp'
import Header from './components/Header'
import { auth } from './firebase/firebase.utils'
import { createUserProfileDocument } from './firebase/firebase.utils'

import { setCurrentUser } from './redux/user/user.actions'
import { useDispatch } from 'react-redux'

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async userAuth => {
            if ( userAuth ) {
                const userRef = await createUserProfileDocument(userAuth)

                userRef.onSnapshot(snapshot => {
                    dispatch(setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data()
                    }))
                })

            }
            dispatch(setCurrentUser(userAuth))
        })
        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <main>
            <Header/>
            <Switch>
                <Route exact path={'/'} component={Homepage}/>
                <Route path={'/shop'} component={ShopPage}/>
                <Route path={'/signin'} component={SignInAndSignUp}/>
            </Switch>
        </main>
    )
}

export default App
