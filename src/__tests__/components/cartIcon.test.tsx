import { render } from '@testing-library/react';
import { CartIcon } from '../../components/cartIcon/CartIcon';

test('renderIcon of cart', () => {
  const { getByText, getByAltText } = render(<CartIcon value={3} />);
  
  const contadorElement = getByText(/3/i);
  expect(contadorElement).toBeInTheDocument();
  
  const imgElement = getByAltText(/cart/i);
  expect(imgElement).toBeInTheDocument();
});