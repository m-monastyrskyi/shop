import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import CollectionsOverview from '../../components/CollectionsOverview'
import CollectionPage from '../collection'
import Spinner from '../../components/Spinner'
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.action'
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors'

const ShopPage = ({ match }) => {
    const dispatch = useDispatch()
    const isFetching = useSelector(selectIsCollectionFetching)

    useEffect(()=>{
        dispatch(fetchCollectionsStartAsync())
    },[])

    return isFetching ? <Spinner/> : (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverview}/>
            <Route path={`${match.path}/:categoryId`} component={CollectionPage}/>
        </div>
    )
}

export default ShopPage