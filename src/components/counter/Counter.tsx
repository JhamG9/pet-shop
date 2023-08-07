import { useState } from "react";
import { useDispatch } from "react-redux";
import * as alertify from 'alertifyjs';
import { Product } from "../../interfaces/ProductInterface";
import { updatedCart } from '../../features/product/productsSlice';
import './counter.scss';


interface PropsCounter {
    product: Product;
    inDetail?: boolean;
}

export const Counter = ({ product, inDetail = false }: PropsCounter) => {
    const [count, setCount] = useState(product.quantity);
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
        updatedQuantityInCart(count + 1);
        delayedAlertAddProduct();
    }

    const updatedQuantityInCart = (quantity: number) => {
        dispatch(updatedCart({ ...product, quantity }));

    }

    return (
        <>
            {
                count > 0 ? (
                    <>
                        {inDetail && <p className='quantity-product'>Cantidad:</p>}
                        <div className="counter">
                            <button className="btn btn-success counter-button" onClick={decrease}>-</button>
                            <span className="counter-value">{count}</span>
                            <button className="btn btn-success counter-button" onClick={increase}>+</button>
                        </div>
                    </>

                ) : (
                    <button onClick={increase} className="btn btn-primary btn-add-cart">Añadir al carrito</button>
                )
            }

        </>
    )
}