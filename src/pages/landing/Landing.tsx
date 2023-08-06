import { CartList } from '../cart/CartList';
import { ProductDetail } from '../product/ProductDetail';
import { ProductList } from '../product/ProductList';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


export const Landing = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProductList />,
    },
    {
      path: "product/:id",
      element: <ProductDetail />,
    },
    {
      path: "/cart",
      element: <CartList />,
    },
  ]);
  


  return (
    <div className="content">
      <header>
        Header
      </header>

      <div className="container">
        <RouterProvider router={router} />
      </div>

      <footer>
        Footer
      </footer>
    </div>
  )
}
