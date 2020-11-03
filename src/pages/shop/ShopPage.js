import React, { useState } from 'react'
import initialShopData from './shopData'
import CollectionPreview from '../../components/CollectionPreview'

const ShopPage = () => {
    const [ collections, setCollections ] = useState( initialShopData )
    return (
        <div className="shop-page">
            { collections.map( ( { id, ...otherCollectionProps } ) => (
                <CollectionPreview key={ id } { ...otherCollectionProps } />
            ) ) }
        </div>
    )
}

export default ShopPage