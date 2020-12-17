import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import CollectionsOverview from '../../components/CollectionsOverview'
import CollectionPage from '../collection'
import Spinner from '../../components/Spinner'
import { fetchCollectionsStart } from '../../redux/shop/shop.action'
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors'

const ShopPage = ({ match }) => {
    const dispatch = useDispatch()
    const isCollectionsLoaded = useSelector(selectIsCollectionsLoaded)

    useEffect(() => {
        dispatch(fetchCollectionsStart())
    }, [])

    return !isCollectionsLoaded ? <Spinner/> : (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverview}/>
            <Route path={`${match.path}/:categoryId`} component={CollectionPage}/>
        </div>
    )
}

export default ShopPage