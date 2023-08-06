import { useSelector } from "react-redux";
import { StoreType } from "../../types/StoreTypes";
import { ProductCard } from "../../components/ProductCard";

export const ProductList = () => {
  const products = useSelector((state: StoreType) => state.products);

  return (
    <div className="row">
      {
        products.map(product => (
          <ProductCard product={product} key={product.id} />
        ))
      }
    </div>
  )
}
