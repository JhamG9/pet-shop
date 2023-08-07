import { useParams } from "react-router-dom";
import { Product } from '../../../interfaces/ProductInterface';
import './productDetail.scss';
import { Counter } from "../../../components/counter/Counter";
import { useSelector } from "react-redux";
import { StoreType } from '../../../types/StoreTypes';
import { useEffect, useState } from "react";
import { Currency } from "../../../components/Currency";

export const ProductDetail = () => {
  const [product, setproduct] = useState<Product>();
  let { id } = useParams();
  const products = useSelector((state: StoreType) => state.products);
  
  useEffect(() => {
    setproduct(products.find((product) => product.id === id));

    console.log(id);
  }, [products]);



  return (
    <div className="row content-detail"><span></span>
      
      {product && (
        <>
          <div className="col-12 col-md-12 col-lg-7 content-img">
            <img className="content-img__img" src={product.imageUrl} alt={product.imageUrl} />
          </div>
          <div className="col-12 col-md-12 col-lg-5 data-product">
            <h1 className="data-product__title">{product.name}</h1>
            <p className="data-product__description">{product.description}</p>
            <p className="data-product__price">Precio: <b> <Currency value={product.price} /></b></p>

            <div className="quantity-product">
              <Counter product={product} inDetail />
            </div>

            <div className="total-product">
              <p>Total: <Currency value={product.price * product.quantity} /></p>
            </div>
          </div>
        </>
      )}

    </div>
  )
}
