import { configureStore } from '@reduxjs/toolkit'
import shoppingCartReducer from '../features/shoppingCart/shoppingCartSlice'
import productsReducer from '../features/product/productsSlice'

export const store = configureStore({
    reducer: {
        shoppingCart: shoppingCartReducer,
        products: productsReducer
    },
})