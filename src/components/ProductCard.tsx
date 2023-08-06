import { Link } from "react-router-dom";
import * as alertify from 'alertifyjs';

import { Product } from "../interfaces/ProductInterface"
import { Currency } from "./Currency";
import { useEffect, useState } from "react";

interface PropsCard {
    product: Product;
}

export const ProductCard = ({ product }: PropsCard) => {
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        let timeoutId: string | number | NodeJS.Timeout | undefined;
        if (showAlert) {
          timeoutId = setTimeout(() => {
            alertify.set('notifier', 'position', 'top-right');
            alertify.success('Current position : ' + alertify.get('notifier', 'position'));
            setShowAlert(false);
          }, 2000);
        }
    
        return () => {
          clearTimeout(timeoutId);
        };
      }, [showAlert]);


    const addProductToCart = () => {
        setShowAlert(true);
    }

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-4 cnt-card">
            <Link to={`/product/${product.id}`} className="card" >
                <img src={product.imageUrl} className="card__img" alt={product.name} />
                <div className="card-body">
                    <h5 className="card-body__title">{product.name}</h5>
                    <p className="card-body__description">{product.description}</p>
                    <p className="card-body__price"><Currency value={product.price} /></p>
                </div>
            </Link>
            <button onClick={addProductToCart} className="btn btn-primary card-body__btn">Añadir al carrito</button>
        </div>
    )
}
