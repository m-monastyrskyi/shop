import React from 'react'
import { useSelector } from 'react-redux'
import './Collection.styles.scss'

import CollectionItem from '../../components/CollectionItem'
import { selectCollection } from '../../redux/shop/shop.selectors'
import Spinner from '../../components/Spinner'

const CollectionPage = ({ match }) => {
    const collection = useSelector(selectCollection(match.params.categoryId))

    if (!collection) return <Spinner />

    const { title, items } = collection

    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className="items">
                {
                    items.map(item => <CollectionItem key={item.id} item={item}/>)
                }
            </div>
        </div>
    )
}

export default CollectionPage