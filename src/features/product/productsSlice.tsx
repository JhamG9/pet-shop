import { createSlice } from "@reduxjs/toolkit";
import initialProducts from '../../data/products.json';

export const productsSlice = createSlice({
    name: 'products',
    initialState: initialProducts,
    reducers: {}
});

export default productsSlice.reducer
