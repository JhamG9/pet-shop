import { CartIcon } from '../cartIcon/CartIcon';
import './header.scss';
import { useSelector } from 'react-redux';
import { StoreType } from '../../types/StoreTypes';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const products = useSelector((state: StoreType) => state.products);
  const [totalProductsInCart, setTotalProductsInCart] = useState(0);

  useEffect(() => {
    const totalProducts = products.filter((product) => product.quantity > 0).length;
    setTotalProductsInCart(totalProducts);
  }, [products]);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary header">
      <div className="container-fluid">
        <Link to={'/'} className="navbar-brand icon-header">
          <img src="https://cdn-icons-png.flaticon.com/512/194/194279.png" alt="pata cariñosa" />
          <span className='icon-header__name'>Pet Shop</span>
        </Link>
        <div className="" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <span className="navbar-text">
            <Link to={'/cart'}>
              <CartIcon value={totalProductsInCart} />
            </Link>
          </span>
        </div>
      </div>
    </nav>
  )
}
