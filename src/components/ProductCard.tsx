import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Currency } from "./Currency";
import { Counter } from "./counter/Counter";
import { updatedCart } from "../features/product/productsSlice";
import { Product } from "../interfaces/ProductInterface"
import iconTrash from "../assets/icons/delete.png";


interface PropsCard {
    product: Product;
    deleteProduct?: boolean;
}

export const ProductCard = ({ product, deleteProduct }: PropsCard) => {
    const dispatch = useDispatch();

    const deleteProductCart = () =>{
        dispatch(updatedCart({ ...product, quantity: 0 }));
    }

    return (
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 mt-4 cnt-card">
            <Link to={`/product/${product.id}`} className="card" >
                <img src={product.imageUrl} className="card__img" alt={product.name} />
                <div className="card-body">
                    <h5 className="card-body__title">{product.name}</h5>
                    <p className="card-body__description">{product.description}</p>
                    <p className="card-body__price"><Currency value={product.price} /></p>
                </div>
            </Link>
            {
                deleteProduct && (
                    <button className="btn btn-danger delete" onClick={deleteProductCart}>
                        <img className="delete__icon" src={iconTrash} alt="delete" />
                    </button>
                )
            }
            <div className="footer-card">
                <Counter product={product} />
            </div>
        </div>
    )
}
