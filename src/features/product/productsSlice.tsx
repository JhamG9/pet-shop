import { createSlice } from "@reduxjs/toolkit";
import initialProducts from '../../data/products.json';
import { Product } from "../../interfaces/ProductInterface";

interface Action {
    payload: Product;
    type: string;
}

export const productsSlice = createSlice({
    name: 'products',
    initialState: initialProducts,
    reducers: {
        updatedCart: (state, action: Action) => {
            const { id, quantity } = action.payload;
            const foundProduct = state.find(task => task.id === id);

            if (foundProduct) {
                foundProduct.quantity = quantity;
            }
        }
    }
});

export const { updatedCart } = productsSlice.actions;
export default productsSlice.reducer
