import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Product } from "../../../interfaces/ProductInterface";
import { ProductCard } from "../../../components/ProductCard";
import { StoreType } from "../../../types/StoreTypes";
import { Currency } from "../../../components/Currency";
import './cartList.scss';

export const CartList = () => {
  const products = useSelector((state: StoreType) => state.products);
  const [productsCart, setProductsCart] = useState<Product[]>([]);
  const [totalCart, setTotalCart] = useState(0)
  const navigate = useNavigate();

  useEffect(() => {
    const productsCart = products.filter((product: Product) => product.quantity > 0);
    setProductsCart(productsCart);

    if(productsCart.length === 0){
      navigate('/');
    }

    setTotalCart(0)
    products.map(product => {
      setTotalCart(value => value + product.quantity * product.price);
    }); 

  }, [products]);


  return (
    <div className="row pt-4">
      <div className="header-cart">
      <h1 className="header-cart__title">Mi carrito</h1>
      <p className="header-cart__total">Total: <b><Currency value={totalCart} /></b></p>

      </div>
      {
        productsCart.map(productCart => (
          <ProductCard product={productCart} deleteProduct  key={productCart.id} />
        ))
      }
    </div>
  )
}
