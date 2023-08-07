import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { ProductDetail } from "../../../pages/product/productDetail/ProductDetail";

const mockStore = configureMockStore();
const initialState = {
  products: [
    {
      id: "1",
      name: "Sample Product",
      description: "This is a sample product",
      imageUrl: "sample.jpg",
      price: 10,
      quantity: 2,
    },
  ],
};
const store = mockStore(initialState);

// Simula useParams para devolver un valor específico
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ id: "1" }), // Cambia esto según el ID que necesites para tus pruebas
}));

describe("ProductDetail", () => {
  it("renders product details correctly", () => {
    render(
      <Provider store={store}>
        <ProductDetail />
      </Provider>
    );
  });

  it("displays specific data of product", () => {
    const { getByText } = render(
      <Provider store={store}>
        <ProductDetail />
      </Provider>
    );
    expect(getByText("Sample Product")).toBeInTheDocument();
    expect(getByText("This is a sample product")).toBeInTheDocument();
    expect(getByText("Total: $ 20")).toBeInTheDocument();
  });
});
