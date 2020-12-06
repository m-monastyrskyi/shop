import React, { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import './App.css'

import Homepage from './pages/homepage/'
import CheckoutPage from './pages/checkout'
import ShopPage from './pages/shop'
import SignInAndSignUp from './pages/signInAndSignUp'
import Header from './components/Header'

import { addCollectionAndDocuments, auth } from './firebase/firebase.utils'
import { createUserProfileDocument } from './firebase/firebase.utils'

import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors'
import { useSelector, useDispatch } from 'react-redux'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(selectCurrentUser)
    // const collectionForPreview = useSelector(selectCollectionsForPreview)

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

        // addCollectionAndDocuments('collections', collectionForPreview.map(({ title, items }) => ({ title, items })))

        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <main>
            <ToastContainer position="top-center"
                            autoClose={2000}
                            hideProgressBar={false}
                            newestOnTop={true}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss={false}
                            draggable={false}
                            pauseOnHover={false}/>
            <Header/>
            <Switch>
                <Route exact path={'/'} component={Homepage}/>
                <Route path={'/shop'} component={ShopPage}/>
                <Route exact path={'/checkout'} component={CheckoutPage}/>
                <Route exact path={'/signin'} render={() => currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUp/>)}/>
            </Switch>
        </main>
    )
}

export default App
