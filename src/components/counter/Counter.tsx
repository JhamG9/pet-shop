import './counter.scss';
import { Product } from "../../interfaces/ProductInterface";
import * as alertify from 'alertifyjs';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updatedCart } from '../../features/product/productsSlice';

interface PropsCounter {
    product: Product
}

export const Counter = ({ product }: PropsCounter) => {
    const [count, setCount] = useState(0);
    const [tempAlert, setTempAlert] = useState<any>();
    const dispatch = useDispatch();

    const delayedAlertAddProduct = () => {
        clearTimeout(tempAlert);
        const setTime = setTimeout(() => {
            alertify.set('notifier', 'position', 'top-right');
            alertify.success('Producto agregado al carrito');
        }, 1000);
        setTempAlert(setTime);
    }

    const decrease = () => {
        if (count > 0) {
            setCount(count - 1);
            updatedQuantityInCart(count - 1);
        }
    }

    const increase = () => {
        setCount(count + 1);
        updatedQuantityInCart(count + 1 );
        delayedAlertAddProduct();
    }

    const updatedQuantityInCart = (quantity:number) =>{
        dispatch(updatedCart({ ...product, quantity}));

    }

    return (
        <>
            {
                count > 0 ? (
                    <div className="counter">
                        <button className="btn btn-success counter-button" onClick={decrease}>-</button>
                        <span className="counter-value">{count}</span>
                        <button className="btn btn-success counter-button" onClick={increase}>+</button>
                    </div>
                ) : (
                    <button onClick={increase} className="btn btn-primary btn-add-cart">Añadir al carrito</button>
                )
            }

        </>
    )
}