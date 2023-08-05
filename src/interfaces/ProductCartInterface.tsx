import { Product } from "./ProductInterface";

export interface ProductCart extends Product {
    quantity: number;
}