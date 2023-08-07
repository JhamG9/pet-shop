import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { ProductList } from "../../../pages/product/ProductList";
import { BrowserRouter } from "react-router-dom";

const mockStore = configureMockStore();
const initialState = {
    products: [
        {
            id: "1",
            name: "Sample Product 1",
            description: "This is sample product 1",
            imageUrl: "sample1.jpg",
            price: 10,
            quantity: 2,
        },
        {
            id: "2",
            name: "Sample Product 2",
            description: "This is sample product 2",
            imageUrl: "sample2.jpg",
            price: 15,
            quantity: 3,
        },
    ],
};

const store = mockStore(initialState);
describe("ProductList", () => {
    it("renders product list correctly", () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <ProductList />
                </BrowserRouter>
            </Provider>
        );

        expect(screen.getByText("Nuestros productos")).toBeInTheDocument();
        expect(screen.getByText("Sample Product 1")).toBeInTheDocument();
        expect(screen.getByText("This is sample product 1")).toBeInTheDocument();

        expect(screen.getByText("Sample Product 2")).toBeInTheDocument();
        expect(screen.getByText("This is sample product 2")).toBeInTheDocument();
    });
});