import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss';

import { Landing } from './pages/landing/Landing';
import { ProductList } from './pages/product/ProductList';
import { ProductDetail } from './pages/product/productDetail/ProductDetail';
import { CartList } from './pages/cart/cartList/CartList';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
      children:[
        {
          path: '',
          element: <ProductList />
        },
        {
          path: "product/:id",
          element: <ProductDetail />,
        },
        {
          path: "/cart",
          element: <CartList />,
        },
      ]
    },
    
  ]);

  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App;
