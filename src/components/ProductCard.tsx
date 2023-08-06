import { Link } from "react-router-dom";
import * as alertify from 'alertifyjs';

import { Product } from "../interfaces/ProductInterface"
import { Currency } from "./Currency";
import { useEffect, useState } from "react";
import { debounce } from 'lodash';
import { updatedCart } from "../features/product/productsSlice";
import { useDispatch } from "react-redux";

interface PropsCard {
    product: Product;
}

export const ProductCard = ({ product }: PropsCard) => {
    const dispatch = useDispatch();
    const alertProductAddedCart = debounce(() => {
        alertify.set('notifier', 'position', 'top-right');
        alertify.success('Current position : ' + alertify.get('notifier', 'position'));
    }, 2000);


    const addProductToCart = () => {
      
        dispatch(updatedCart({...product, quantity: 20}));
        alertProductAddedCart();
    }

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-4 cnt-card">
            <Link to={`/product/${product.id}`} className="card" >
                <img src={product.imageUrl} className="card__img" alt={product.name} />
                <div className="card-body">
                <p>{product.quantity}</p>

                    <h5 className="card-body__title">{product.name}</h5>
                    <p className="card-body__description">{product.description}</p>
                    <p className="card-body__price"><Currency value={product.price} /></p>
                </div>
            </Link>
            <button onClick={addProductToCart} className="btn btn-primary card-body__btn">Añadir al carrito</button>
        </div>
    )
}
