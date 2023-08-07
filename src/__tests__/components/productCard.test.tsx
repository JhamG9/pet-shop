import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { ProductCard } from '../../components/ProductCard';
import { Product } from '../../interfaces/ProductInterface';
import productsReducer from '../../features/product/productsSlice'
import { BrowserRouter } from 'react-router-dom';

const mockStore = configureMockStore([]);

describe('ProductCard Component', () => {
    it('calls dispatch with the correct action when delete button is clicked', () => {
        const product: Product = {
            id: '1',
            name: 'Example Product',
            description: 'Product Description',
            price: 1000,
            imageUrl: 'example.jpg',
            quantity: 2,
        };
        const store = mockStore({
            reducer: {
                products: productsReducer
            },
        });

        const { getByAltText } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <ProductCard product={product} deleteProduct />
                </BrowserRouter>
            </Provider>
        );

        const deleteButton = getByAltText('delete');
        fireEvent.click(deleteButton);
        const actions = store.getActions();
        expect(actions).toEqual([{
            payload: {
                description: "Product Description",
                id: "1",
                imageUrl: "example.jpg",
                name: "Example Product",
                price: 1000,
                quantity: 0,
            },
            type: "products/updatedCart",
        }
        ]);
    });
});