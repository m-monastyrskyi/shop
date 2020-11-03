import React from 'react'
import './CollectionItem.styles.scss'
import CustomButton from '../CustomButton'
import { useDispatch } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'


const CollectionItem = ({ item }) => {
    const { name, price, imageUrl } = item
    const dispatch = useDispatch()

    return (
        <div className="collection-item">
            <div className="image"
                 style={{
                     backgroundImage: `url(${imageUrl})`
                 }}/>

            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton inverted
                          onClick={() => dispatch(addItem(item))}
            >Add to cart</CustomButton>
        </div>
    )
}

export default CollectionItem