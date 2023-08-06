import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../interfaces/ProductInterface";
import initialProducts from '../../data/products.json';

export const shoppingCartSlice = createSlice({
    name: 'cart',
    initialState: initialProducts,
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload);

        },
        editProduct: (state, action) => {
            const { id, description } = action.payload;
            // const foundTask = state.find(task => task.id === id);

            // if (foundTask) {
            //     //foundTask.title = title;
            //     foundTask.description = description;
            // }
        },
        deleteProduct: (state, action) => {
            // const taskFound = state.find(task => task.id === action.payload);
            // if (taskFound) {
            //     state.splice(state.indexOf(taskFound), 1);
            // }
        }
    }
});

export const { addProduct, deleteProduct, editProduct } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer
