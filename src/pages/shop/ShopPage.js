import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'

import CollectionsOverview from '../../components/CollectionsOverview'
import CollectionPage from '../collection'
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils'
import { useDispatch } from 'react-redux'
import { updateCollections } from '../../redux/shop/shop.action'

const ShopPage = ({ match }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        const collectionRef = firestore.collection('collections')
        const unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            dispatch(updateCollections(collectionsMap))
        })
        return () => unsubscribeFromSnapshot()
    }, [])

    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverview}/>
            <Route path={`${match.path}/:categoryId`} component={CollectionPage}/>
        </div>
    )
}

export default ShopPage