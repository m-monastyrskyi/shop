import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import CollectionsOverview from '../../components/CollectionsOverview'
import CollectionPage from '../collection'
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils'
import { updateCollections } from '../../redux/shop/shop.action'
import Spinner from '../../components/Spinner'

const ShopPage = ({ match }) => {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const collectionRef = firestore.collection('collections')
        const unsubscribeFromSnapshot = collectionRef.onSnapshot(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            dispatch(updateCollections(collectionsMap))
            setIsLoading(false)
        })

        return () => unsubscribeFromSnapshot()
    }, [])

    return isLoading ? <Spinner/> : (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverview}/>
            <Route path={`${match.path}/:categoryId`} component={CollectionPage}/>
        </div>
    )
}

export default ShopPage