import { createSelector } from 'reselect'

export const selectShop = state => state.shop

export const selectShopData = createSelector(
    selectShop,
    shop => shop.shopData
)