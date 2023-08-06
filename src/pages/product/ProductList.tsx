import { useSelector } from "react-redux";
import { StoreType } from "../../types/StoreTypes";
import { ProductCard } from "../../components/ProductCard";

export const ProductList = () => {
  const products = useSelector((state: StoreType) => state.products);

  return (
    <div className="row pt-4">
      <h1>Nuestros productos</h1>
      {
        products.map(product => (
          <ProductCard product={product} key={product.id} />
        ))
      }
    </div>
  )
}
