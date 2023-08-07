import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { Product } from '../../interfaces/ProductInterface';
import { Counter } from '../../components/counter/Counter';
import productsReducer from '../../features/product/productsSlice'


const mockStore = configureMockStore([]);
const store = mockStore({
  reducer: {
    products: productsReducer
  },
});

const product: Product = {
  id: '1',
  name: 'Example Product',
  quantity: 2,
  description: 'Example Description',
  imageUrl: 'https://imageExample.com/image.png',
  price: 2500
};

describe('increase Function', () => {
  it('increases and decrease the count function', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Counter product={product} />
      </Provider>
    );

    const countText = getByText('2');

    const increaseButton = getByText('+');
    fireEvent.click(increaseButton);
    expect(countText.textContent).toBe('3');

    const decreaseButton = getByText('-');
    fireEvent.click(decreaseButton);
    expect(countText.textContent).toBe('2');
  });
});